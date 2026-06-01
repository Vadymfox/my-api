export default async function handler(req, res) {
  try {
    // URL берём из DevTools → Network → Request URL
    const targetUrl = "https://main.prod.m11g.ajax.systems/statistics/api/v3/by_grouping_name/?stage=assembling&format=region&location=is76&response_tz=Europe%2FKyiv&time_from=2026-05-30T08%3A00%3A00%2B03%3A00&time_to=2026-05-31T20%3A00%3A00%2B03%3A00&grouping_name0=product_name&grouping_name2=full_name&show_unique=true&unique_by=ftt&register_types=dev&register_types=central&register_types=component&register_types=accessory";

    // Cookie берём из DevTools → Request Headers → Cookie
    const cookieHeader = "csrftoken=J2t6jjRNZbA0BSAANwFshop1V3Po1fF2; access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NDI5IiwidXNlciI6Ikxpc2l0c3luLlYiLCJleHAiOjE3ODAzMDIzMTcsImlhdCI6MTc4MDI5ODcxNywianRpIjoiNjcwNDU5In0.x1KTkxFEgbVFv1H-c7N2cleqXOmGdSqS4bxegV8omSHzn7arb37I-CsU0wRlUiOfj9mfpZcLHumH2TVM6tVs0CgeW0hacgAiBmkEjK-GGzlqSpFyXlizi_WqqmsNuHb6JcnXuaCSNZXgHZQsy7WsCSwp95BbSiZcqzcVx3s8gfBlERrF2LFe61sEELNxzbRmKmuMzuqkbPrqCQVvMhKult4UOAYqooA831iZHEr_GrlFAt8JZE0Jq6Gax7hp-UerLBOVhFp5dnEzi4wTZrqO9fKV9er88-4CvRDfEghoHHFQxtZhWaJvsUhBexs0ut0cmvK2GzM1OBKveGBL_WPN8Q; access_token_exists=true";

    const response = await fetch(targetUrl, {
      headers: {
        fetch("https://main.prod.m11g.ajax.systems/statistics/api/v3/by_grouping_name/?stage=assembling&format=region&location=is76&response_tz=Europe%2FKyiv&time_from=2026-05-30T08%3A00%3A00%2B03%3A00&time_to=2026-05-31T20%3A00%3A00%2B03%3A00&grouping_name0=product_name&grouping_name2=full_name&show_unique=true&unique_by=ftt&register_types=dev&register_types=central&register_types=component&register_types=accessory", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "uk,en-US;q=0.9,en;q=0.8,ru;q=0.7",
    "authorization": "Token undefined",
    "requestuuid": "de127ce6-8d5e-4413-a126-bad1fb280fcc",
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
      }
    });

    // Проверяем статус
    if (!response.ok) {
      return res.status(response.status).json({
        error: `Не удалось подключиться. Код ответа: ${response.status}`
      });
    }

    // Возвращаем первые 300 символов ответа для проверки
    const text = await response.text();
    return res.status(200).send(text.slice(0, 300));

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
