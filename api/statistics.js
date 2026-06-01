export default async function handler(req, res) {
  try {
    const response = await fetch("https://fswcopwczgfofuijxcyp.supabase.co/rest/v1/3-Area?select=*", {
  "headers": {
    "accept": "*/*",
    "accept-language": "uk,en-US;q=0.9,en;q=0.8,ru;q=0.7",
    "accept-profile": "public",
    "apikey": "sb_publishable_mB28_c5IoxmafFgkXzEORw_w7EUA2MV",
    "authorization": "Bearer sb_publishable_mB28_c5IoxmafFgkXzEORw_w7EUA2MV",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"148\", \"Google Chrome\";v=\"148\", \"Not/A)Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-client-info": "supabase-js-web/2.106.2",
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

