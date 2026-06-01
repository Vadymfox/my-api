export default async function handler(req, res) {
  try {
    const response = await fetch("https://httpbin.org/get");

    if (!response.ok) {
      return res.status(response.status).json({
        error: `Ошибка подключения: ${response.status}`
      });
    }

    const text = await response.text();
    // Возвращаем первые 200 символов HTML
    return res.status(200).send(text.slice(0, 200));
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

