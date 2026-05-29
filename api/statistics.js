export default async function handler(req, res) {
  try {
    const targetUrl = "https://jh6tpj.csb.app/";

    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0", // имитация браузера
        // "Cookie": "session=abc123", // если нужна авторизация
        // "Authorization": "Bearer ТВОЙ_ТОКЕН" // если нужен токен
      }
    });

    // Проверка: достучались ли до сайта
    if (!response.ok) {
      return res.status(response.status).json({
        error: `Не удалось подключиться. Код ответа: ${response.status}`
      });
    }

    const html = await response.text();

    // Проверка: есть ли таблица
    const match = html.match(/<table[\s\S]*?<\/table>/i);
    if (!match) {
      return res.status(404).json({ error: "Таблица не найдена" });
    }

    const format = req.query.format || "html";

    if (format === "json") {
      const rows = match[0].match(/<tr[\s\S]*?<\/tr>/g) || [];
      const data = rows.map(row =>
        (row.match(/<td[\s\S]*?<\/td>/g) || [])
          .map(cell => cell.replace(/<\/?td[^>]*>/g, "").trim())
      );
      return res.status(200).json({ data });
    } else {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.status(200).send(match[0]);
    }
  } catch (error) {
    return res.status(500).json({ error: `Ошибка запроса: ${error.message}` });
  }
}
