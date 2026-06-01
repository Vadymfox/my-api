export default async function handler(req, res) {
  try {
    const targetUrl = "https://main.prod.m11g.ajax.systems/statistics/api/v3/by_grouping_name/?stage=assembling&format=region&location=is76&response_tz=Europe%2FKyiv&time_from=2026-05-30T08%3A00%3A00%2B03%3A00&time_to=2026-05-31T20%3A00%3A00%2B03%3A00&grouping_name0=product_name&grouping_name2=full_name&show_unique=true&unique_by=ftt&register_types=dev&register_types=central&register_types=component&register_types=accessory"; // замени на реальный адрес

    const response = await fetch(targetUrl, {
      headers: {
        "Cookie": "cookieyes-consent=consentid:dDVsVFdQZW5vYTV2TXBLYzhXQ3R3QU10cHYyeXNGTWk,consent:no,action:yes,necessary:yes,functional:no,analytics:no,performance:no,advertisement:no,other:no; csrftoken=J2t6jjRNZbA0BSAANwFshop1V3Po1fF2; access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NDI5IiwidXNlciI6Ikxpc2l0c3luLlYiLCJleHAiOjE3ODAzMDIzMTcsImlhdCI6MTc4MDI5ODcxNywianRpIjoiNjcwNDU5In0.x1KTkxFEgbVFv1H-c7N2cleqXOmGdSqS4bxegV8omSHzn7arb37I-CsU0wRlUiOfj9mfpZcLHumH2TVM6tVs0CgeW0hacgAiBmkEjK-GGzlqSpFyXlizi_WqqmsNuHb6JcnXuaCSNZXgHZQsy7WsCSwp95BbSiZcqzcVx3s8gfBlERrF2LFe61sEELNxzbRmKmuMzuqkbPrqCQVvMhKult4UOAYqooA831iZHEr_GrlFAt8JZE0Jq6Gax7hp-UerLBOVhFp5dnEzi4wTZrqO9fKV9er88-4CvRDfEghoHHFQxtZhWaJvsUhBexs0ut0cmvK2GzM1OBKveGBL_WPN8Q; access_token_exists=true",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36"
      }
    });

    // Проверка: достучались ли
    if (!response.ok) {
      return res.status(response.status).json({
        error: `Не удалось подключиться. Код ответа: ${response.status}`
      });
    }

    // Просто возвращаем первые 500 символов HTML
    const html = await response.text();
    return res.status(200).send(html.slice(0, 500));

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
