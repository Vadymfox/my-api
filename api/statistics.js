export default async function handler(req, res) {
  try {
    // URL сайта организации
    const targetUrl = "https://main.prod.m11g.ajax.systems/webaut/statistics/by_product?stage=pack&location=is76&date_from=2026-05-27&date_to=2026-05-28&start_time=20%3A00&end_time=08%3A00";

    // Добавляем заголовки авторизации
    const response = await fetch(targetUrl, {
      headers: {
        "Cookie": "cookieyes-consent=consentid:dDVsVFdQZW5vYTV2TXBLYzhXQ3R3QU10cHYyeXNGTWk,consent:no,action:yes,necessary:yes,functional:no,analytics:no,performance:no,advertisement:no,other:no; csrftoken=J2t6jjRNZbA0BSAANwFshop1V3Po1fF2; access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NDI5IiwidXNlciI6Ikxpc2l0c3luLlYiLCJleHAiOjE3Nzk5Njc4NzksImlhdCI6MTc3OTk2NDI3OSwianRpIjoiNjUxODA5In0.rRhwA0VjYO9rfvIM1LCohi6TDb39kszZVP6pSakJ1PQ-XqYjCTOTAVc0LzyrPaTKvyAyicTDaV_gt4JdtK5VWEk0vrCdiXiBWBwhyaJg1WK3Xk__EqeMMBOTVKutf_DOz4KCOJXw6GRSB_qbjgIRsW1AAoGT6Lte4EW6e2WFiCmM1W8HbWCoxKhMyvz1azBruZwPv9t-wfETOfa9Jdk4j7SDvcn9p_cEVgMD-wY8aVtRyq-y-Ym-csNeK4q37CAQsRmogjJSY_dF0RdWUQ07GzHZmWdy8HnqQbU1IWIEH4Jv9t9CyTB5veN3pbPAGZ6OxqlB-ZU9G6vpqL_Kq2p_6Q; access_token_exists=true"   // если нужна cookie
       // "Authorization": "Bearer ТВОЙ_ТОКЕН",      // если нужен токен
       // "User-Agent": "Mozilla/5.0"                // иногда помогает имитировать браузер
      }
    });
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
