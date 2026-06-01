export default async function handler(req, res) {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxpvo4tXu7Jn9KDh0cS2GXq7TwdDBZGuYosSzrxnmKR50ZluuO3tnLDYfjB6XAFpAA/exec");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

