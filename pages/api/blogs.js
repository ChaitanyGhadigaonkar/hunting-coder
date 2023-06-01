import connectDb from "@/utils/conn";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectDb();
      const blogs = await Blog.find({}).sort({
        updatedAt: "desc",
      });
      res.status(200).json({ success: true, blogs});
    } catch (err) {
      res.status(400).json({ success: false, msg: err });
    }
  } else {
    res.json({ msg: "The method must be get" });
  }
}
