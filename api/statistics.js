export default async function handler(req, res) {
  try {
    // URL сайта организации
    const targetUrl = "https://main.prod.m11g.ajax.systems/webaut/statistics/by_product?stage=pack&location=is76&date_from=2026-05-27&date_to=2026-05-28&start_time=20%3A00&end_time=08%3A00";

    // Встроенный fetch в Vercel
    const response = await fetch(targetUrl);
    const html = await response.text();

    // Ищем первую таблицу
    const match = html.match(/<table[\s\S]*?<\/table>/i);
    if (!match) {
      return res.status(404).send("Таблица не найдена");
    }

    // Проверяем формат
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
    return res.status(500).json({ error: error.message });
  }
}
