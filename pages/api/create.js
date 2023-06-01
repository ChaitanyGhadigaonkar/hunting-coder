import connectDb from "@/utils/conn";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, author, content } = req.body;
    try {
      await connectDb();
      const blog = await new Blog({ title, author, content });
      const result = await blog.save();
      res.status(200).json({ success: true, msg: "Blog created successfully" });
    } catch (err) {
      res.status(400).json({ success: false, msg: err });
    }
  } else {
    res.json({ msg: "The method must be post" });
  }
}
