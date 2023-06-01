import mongoose from "mongoose"


const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        require:[true,"title is required"],
    },
    author:{
        type:String,
        require:[true,"author name is required"]
    },
    content:{
        type:String,
        require:[true,"content is required"]
    },
    date:{
        type:Date,
        default:Date.now()
    },
    // images:{

    // }
},{timestamps:true});

mongoose.models = {}

const Blog = mongoose.models.Blog || mongoose.model("Blog",blogSchema)


export default Blog;