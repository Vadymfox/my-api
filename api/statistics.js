export default async function handler(req, res) {
  try {
    const response = await fetch("https://main.prod.m11g.ajax.systems/statistics/api/v3/by_grouping_name/?stage=assembling&format=region&location=all&response_tz=UTC&time_from=2026-05-21T08%3A00%3A00%2B00%3A00&time_to=2026-05-21T20%3A00%3A00%2B00%3A00&grouping_name0=product_name&grouping_name2=full_name&show_unique=true&unique_by=ltt&register_types=dev&register_types=central&register_types=component&register_types=accessory", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "uk,en-US;q=0.9,en;q=0.8,ru;q=0.7",
    "authorization": "Token undefined",
    "requestuuid": "9a30540c-9aea-4349-82aa-82a840a40fdf",
    "sec-ch-ua": "\"Chromium\";v=\"148\", \"Google Chrome\";v=\"148\", \"Not/A)Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "cookieyes-consent=consentid:dDVsVFdQZW5vYTV2TXBLYzhXQ3R3QU10cHYyeXNGTWk,consent:no,action:yes,necessary:yes,functional:no,analytics:no,performance:no,advertisement:no,other:no; csrftoken=J2t6jjRNZbA0BSAANwFshop1V3Po1fF2; access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NDI5IiwidXNlciI6Ikxpc2l0c3luLlYiLCJleHAiOjE3ODAzMTgxMTcsImlhdCI6MTc4MDMxNDUxNywianRpIjoiNjcxODk5In0.iwh_lSkRCsjhmDWY3xgEWoqUX38osst4dHu-Flixn-lCYAzkPyROMWRvuAjohoKDeoGFHPqV696OW3C2zLgm4CFM7-kMaRIR1m6laCQ2jy3A3n59UFbGaEPgEyiC64gnUtX8K0N-6KBBOSBhxVAwcLHUs7OSpdKqJ57BzcpTZaeZ_xXcBzGQqLlxZxdUE-tXRg8GvVSII5GO6XYSiiDaJHSqwuq2eEetFw2WrHs5J0z-Z_uuhHQN1J_tB97GUqmes4-Tpbg_YUg6xNHEOBFkFqvAp9VtlLjYvg7-wTFutagbi-QNG5eEIjJt0fPL5SvaYlLj_C3kha9qoHxQq4lDzg; access_token_exists=true",
    "Referer": "https://main.prod.m11g.ajax.systems/webaut/statistics/by_product?utm_source=wp&utm_medium=homepage&utm_version=MS4xNC4w&stage=assembling&date_from=2026-05-21&date_to=2026-05-21"
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

