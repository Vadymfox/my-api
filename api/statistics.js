export default async function handler(req, res) {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxpvo4tXu7Jn9KDh0cS2GXq7TwdDBZGuYosSzrxnmKR50ZluuO3tnLDYfjB6XAFpAA/exec");
    const text = await response.text();

    try {
      const data = JSON.parse(text);
      return res.status(200).json(data);
    } catch {
      return res.status(200).send(text.slice(0, 200));
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

