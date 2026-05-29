import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    // URL сайта организации, где лежит таблица
    const targetUrl = "https://адрес-сайта-организации";

    // Делаем запрос к сайту
    const response = await fetch(targetUrl);
    const html = await response.text();

    // Ищем первую таблицу на странице
    const match = html.match(/<table[\s\S]*?<\/table>/i);
    if (!match) {
      return res.status(404).send("Таблица не найдена");
    }

    // Проверяем формат ответа (по умолчанию HTML)
    const format = req.query.format || "html";

    if (format === "json") {
      // Простейший парсинг строк таблицы в JSON
      const rows = match[0]
        .replace(/<\/tr>/g, "</tr>\n")
        .match(/<tr[\s\S]*?<\/tr>/g) || [];

      const data = rows.map(row =>
        row
          .replace(/<\/td>/g, "</td>\n")
          .match(/<td[\s\S]*?<\/td>/g)
          ?.map(cell => cell.replace(/<\/?td[^>]*>/g, "").trim())
      );

      return res.status(200).json({ data });
    } else {
      // Отдаём таблицу как HTML
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.status(200).send(match[0]);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
