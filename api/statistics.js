export default function handler(req, res) {
  const { stage, date_from, date_to, location, start_time, end_time } = req.query;
  res.status(200).json({
    stage,
    date_from,
    date_to,
    location,
    start_time,
    end_time,
    data: ["пример строки 1", "пример строки 2"]
  });
}
