export default async function handler(req, res) {
  try {
    const response = await fetch("https://fswcopwczgfofuijxcyp.supabase.co/rest/v1/3-Area?select=*", {
  "headers": {
   
    "Referer": "https://jh6tpj.csb.app/"
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

