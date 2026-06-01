export default async function handler(req, res) {
  try {
    const response = await fetch("https://fswcopwczgfofuijxcyp.supabase.co/rest/v1/3-Area?select=*", {
  "headers": {
    "accept": "*/*",
    "accept-language": "uk,en-US;q=0.9,en;q=0.8,ru;q=0.7",
    "accept-profile": "public"
   
  },
  "body": null,
  "method": "GET"
});

    if (!response.ok) {
      return res.status(response.status).json({ error: `Ошибка: ${response.status}` });
    }

    const data = await response.json();
    return res.status(200).json(data); // отдаст JSON с постом
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

