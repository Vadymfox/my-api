export default async function handler(req, res) {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxpvo4tXu7Jn9KDh0cS2GXq7TwdDBZGuYosSzrxnmKR50ZluuO3tnLDYfjB6XAFpAA/exec");
    if (!response.ok) {
      return res.status(response.status).json({ error: `Ошибка: ${response.status}` });
    }

    const text = await response.text();

    // Попробуем распарсить как JSON
    try {
      const data = JSON.parse(text);
      return res.status(200).json(data);
    } catch {
      // Если это HTML или другой текст — вернём как текст
      return res.status(200).send(text.slice(0, 300)); 
      // можно ограничить длину, чтобы не перегружать ответ
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

