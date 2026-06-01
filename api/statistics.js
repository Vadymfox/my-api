export default async function handler(req, res) {
  try {
    const response = await fetch("https://main.prod.m11g.ajax.systems/core-db/api/v1/accounts/", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "uk,en-US;q=0.9,en;q=0.8,ru;q=0.7",
    "baggage": "sentry-environment=prod-main,sentry-release=1.14.0,sentry-public_key=886fc6538d01d2c8bfad5a45c5b324a6,sentry-trace_id=9c61ece492454e2f9cb61ffcd3c3cf50,sentry-sample_rate=1,sentry-sampled=true",
    "sec-ch-ua": "\"Chromium\";v=\"148\", \"Google Chrome\";v=\"148\", \"Not/A)Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sentry-trace": "9c61ece492454e2f9cb61ffcd3c3cf50-b5c7deb01355325e-1",
    "x-requestuuid": "3-6c5bb995-fef3-43a7-bef9-5a32c9d2e33f",
    "x-softname": "WelcomePage",
    "x-softversion": "1.14.0"
  },
  "referrer": "https://main.prod.m11g.ajax.systems/webaut/",
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

