export default async function handler(req, res) {
  try {
    const targetUrl = "https://адрес-сайта-организации";

    // Передаём cookie в заголовке
    const response = await fetch(targetUrl, {
      headers: {
        "Cookie": "cookieyes-consent=consentid:dDVsVFdQZW5vYTV2TXBLYzhXQ3R3QU10cHYyeXNGTWk,consent:no,action:yes,necessary:yes,functional:no,analytics:no,performance:no,advertisement:no,other:no; csrftoken=J2t6jjRNZbA0BSAANwFshop1V3Po1fF2; access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NDI5IiwidXNlciI6Ikxpc2l0c3luLlYiLCJleHAiOjE3ODAyOTg1NzcsImlhdCI6MTc4MDI5NDk3NywianRpIjoiNjcwMDk5In0.z482efurc-EL17SOXuiele2I9ZmpFL66ykprx-OSzpjU6NGtcHlplGM4inLTMChYPKk5Z2oy4NDdU0OStl98JrwJBRmgYJ7QwT7qd_4wVqOGit0SybbY7rlfroWLnNCGwPecK1BMTjXBdyFOBasZDnQo8_WAXoWBJVc0D_FNsxjDDzplTc_ZQC3y9Sgq4X5eRLdK9fUb_m2rg9HwS3U2LZLUJC_Q0bGNoXOHIut9b86aJxr7RbqunjMleRBl48lz_vdi9dp3zaaoVgvclqa_gy6dL1wpHJZuwI7bgoeqaqNBQTzSI9xOwGmgQUUIwm9MDzE6M7HAnU3_Zi_qA-HVtw; access_token_exists=true,
        "User-Agent": "Mozilla/5.0"
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({
        error: `Не удалось подключиться. Код ответа: ${response.status}`
      });
    }

    const html = await response.text();

    const match = html.match(/<table[\s\S]*?<\/table>/i);
    if (!match) {
      return res.status(404).json({ error: "Таблица не найдена" });
    }

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(200).send(match[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
