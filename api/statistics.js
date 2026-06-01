export default async function handler(req, res) {
  try {
    const response = await fetch("https://main.prod.m11g.ajax.systems/core-db/api/v1/marker_register/", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "uk,en-US;q=0.9,en;q=0.8,ru;q=0.7",
    "sec-ch-ua": "\"Chromium\";v=\"148\", \"Google Chrome\";v=\"148\", \"Not/A)Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requestuuid": "5-5dac7293-10cd-4311-a7dc-d401949eb2c3",
    "x-softname": "Statistics",
    "x-softversion": "1.15.1",
    "cookie": "cookieyes-consent=consentid:dDVsVFdQZW5vYTV2TXBLYzhXQ3R3QU10cHYyeXNGTWk,consent:no,action:yes,necessary:yes,functional:no,analytics:no,performance:no,advertisement:no,other:no; csrftoken=J2t6jjRNZbA0BSAANwFshop1V3Po1fF2; access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NDI5IiwidXNlciI6Ikxpc2l0c3luLlYiLCJleHAiOjE3ODAzMTQ0NDUsImlhdCI6MTc4MDMxMDg0NSwianRpIjoiNjcxNTYyIn0.XZ6KtJS7vAbFQQSVxq00l9tPWYgjx5DCW6kBwwZD8nmqpqQCZJq6W9loxXTDRV6L9xup0F8-n6EqrCob3wosDUTN3dJmWMAO5knf_VZW4I0wiTLu7IQ1LM_CJ3WXyAMTE1GEdVbZ5kkWJTVOQK7nXXce2MmwpK2ld6veUafgKB4lA99EXY68JZKGXNHN7tk3j4JAz2j0N5QOfCdWFMlvqIDJH_mv-nj3qT5d8KFdo3ew7CmupLUbKPdFdK_DApohC3Rx4r7QRJHtE19bZp8ag9un6bE5OGmENkym9PfqqD3aKYaMsQM5xMWKlaPFntRK0DO3qRmkBamXYRj9lJXK0A; access_token_exists=true",
    "Referer": "https://main.prod.m11g.ajax.systems/webaut/statistics/by_product?utm_source=wp&utm_medium=homepage&utm_version=MS4xNC4w"
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

