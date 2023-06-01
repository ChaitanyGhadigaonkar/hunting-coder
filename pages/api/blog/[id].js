import connectDb from "@/utils/conn";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
    const _id = req.query.id; 
  if (req.method === "GET") {
    try {
      await connectDb();
      const blog = await Blog.findOne({_id});
      res.status(200).json({ success: true, blog});
    } catch (err) {
      res.status(400).json({ success: false, msg: err });
    }
  } else {
    res.json({ msg: "The method must be get" });
  }
}
