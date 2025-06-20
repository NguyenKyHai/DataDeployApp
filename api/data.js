export default function handler(req, res) {
  const data = [
    { "GL0010000": "*", "GL1060001": "H41", "GL1060002": "O75" },
    { "GL0010000": "*", "GL1060001": "H40", "GL1060002": "O75" }
    // bạn thêm dữ liệu JSON đầy đủ ở đây
  ];

  res.status(200).json(data);
}