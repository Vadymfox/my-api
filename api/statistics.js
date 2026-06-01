export default async function handler(req, res) {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxpvo4tXu7Jn9KDh0cS2GXq7TwdDBZGuYosSzrxnmKR50ZluuO3tnLDYfjB6XAFpAA/exec");
    const text = await response.text();

    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const data = JSON.parse(text);
      return res.status(200).json(data);
    } else {
      // Отдаём HTML как есть, чтобы браузер показал страницу
      return res.status(200).send(text);
    }
  } catch (error) {
    return res.status(500).send(`<h1>Ошибка</h1><p>${error.message}</p>`);
  }
}

