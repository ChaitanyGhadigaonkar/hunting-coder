import Link from "next/link";

const LatestBlogs = ({id, title,description})=>{
    return (
        <div className="latestBlogs flex flex-col text-left justify-start">
            <h4 className="text-2xl font-semibold my-2">
                {title}
            </h4>
            <p className="description text-base ">
            {description.length > 200 ? description.slice(0,200)+"..." : description}
            </p>
            <button className="text-base bg-slate-400 w-24 rounded-lg my-2 hover:text-white px-2 py-2"><Link href={`/blog/${id}`}>Read more</Link></button>
        </div>

    )
}

export default LatestBlogs;