export default async function handler(req, res) {
  try {
    const response = await fetch("https://main.prod.m11g.ajax.systems/core-db/api/v1/accounts/", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "uk,en-US;q=0.9,en;q=0.8,ru;q=0.7",
    "sec-ch-ua": "\"Chromium\";v=\"148\", \"Google Chrome\";v=\"148\", \"Not/A)Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requestuuid": "8-5dac7293-10cd-4311-a7dc-d401949eb2c3",
    "x-softname": "Statistics",
    "x-softversion": "1.15.1"
  },
  "referrer": "https://main.prod.m11g.ajax.systems/webaut/statistics/by_product?utm_source=wp&utm_medium=homepage&utm_version=MS4xNC4w",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
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

