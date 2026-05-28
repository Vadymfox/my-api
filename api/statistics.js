export default function handler(req, res) {
  // Получаем параметры из запроса
  const { stage, date_from, date_to, location, start_time, end_time } = req.query;

  // Формируем ответ
  res.status(200).json({
    stage,
    date_from,
    date_to,
    location,
    start_time,
    end_time,
    data: [
      "Пример строки 1",
      "Пример строки 2",
      "Пример строки 3"
    ]
  });
}
