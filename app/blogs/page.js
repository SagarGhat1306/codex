import React from "react";
import Link from "next/link";

 const blogs = [
    {
      id: 1,
      title: "Mastering JavaScript in 30 Days",
      excerpt: "Learn how to become a JavaScript expert with a structured 30-day guide, tips, and project ideas.",
      date: "June 10, 2025"
    },
    {
      id: 2,
      title: "Top 5 React Libraries You Should Know",
      excerpt: "Explore the most useful libraries in the React ecosystem to boost your frontend productivity.",
      date: "June 12, 2025"
    },
    {
      id: 3,
      title: "The Future of Web Development",
      excerpt: "AI, WebAssembly, and edge computing – discover what is shaping the future of web development.",
      date: "June 15, 2025"
    }
  ];
export default function Blogs() {
  return (
    <div className="flex justify-center mt-20">
    <div className="flex flex-col items-center justify-center gap-10 max-w-2xl">
    
      {blogs.map(blog => (
          <div key={blog.id} className="p-5 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
            <p className="text-gray-700">{blog.excerpt}</p>
            </Link>
          </div>
        ))}
 
    </div>
    </div>
 
)
}
