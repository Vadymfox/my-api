export default async function handler(req, res) {
  try {
    // URL берём из DevTools → Network → Request URL
    const targetUrl = "https://site.org/"; // замени на реальный адрес

    // Cookie берём из DevTools → Request Headers → Cookie
    const cookieHeader = "csrftoken=...; access_token=...; access_token_exists=true";

    const response = await fetch(targetUrl, {
      headers: {
        "Cookie": cookieHeader,
        "User-Agent": "Mozilla/5.0"
      }
    });

    // Проверяем статус
    if (!response.ok) {
      return res.status(response.status).json({
        error: `Не удалось подключиться. Код ответа: ${response.status}`
      });
    }

    // Возвращаем первые 300 символов ответа для проверки
    const text = await response.text();
    return res.status(200).send(text.slice(0, 300));

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
