export default async function handler(req, res) {
  try {
    const response = await fetch("https://main.prod.m11g.ajax.systems/statistics/api/v3/by_grouping_name/?stage=assembling&format=region&location=is76&response_tz=Europe%2FKyiv&time_from=2026-05-30T08%3A00%3A00%2B03%3A00&time_to=2026-05-31T20%3A00%3A00%2B03%3A00&grouping_name0=product_name&grouping_name2=full_name&show_unique=true&unique_by=ftt&register_types=dev&register_types=central&register_types=component&register_types=accessory", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "uk,en-US;q=0.9,en;q=0.8,ru;q=0.7",
    "authorization": "Token undefined",
    "requestuuid": "45a8c169-bf39-4b4b-ab8e-133e39ef70d8",
    "sec-ch-ua": "\"Chromium\";v=\"148\", \"Google Chrome\";v=\"148\", \"Not/A)Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://main.prod.m11g.ajax.systems/webaut/statistics/by_product?utm_source=wp&utm_medium=homepage&utm_version=MS4xNC4w&stage=assembling&location=is76&unique_by=ftt&date_from=2026-05-30&date_to=2026-05-31",
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

