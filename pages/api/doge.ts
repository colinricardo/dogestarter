export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "bork bork" });
  } else {
    return res.status(404).json({ message: "Route not found." });
  }
}
