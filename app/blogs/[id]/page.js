export default function Blogpost ({ params }) {

    const { id } = params;


 const blogPosts = {
    1: {
      title: "Mastering JavaScript in 30 Days",
      date: "June 10, 2025",
      author: "Sagar Ghat",
      content: `
JavaScript is one of the most powerful and versatile languages in web development. 
Whether you're a beginner or an experienced developer, this 30-day guide will help you master the core concepts of JavaScript step by step.

Day 1–5: Understanding the Basics
- Variables (let, const, var)
- Data types: strings, numbers, booleans, arrays, objects
- Basic operators and expressions

Day 6–10: Functions and Control Flow
- Writing and calling functions
- if, else, switch statements
- Loops: for, while, do...while

Day 11–15: DOM Manipulation
- Selecting elements with querySelector
- Changing content and style
- Adding/removing classes and event listeners

Day 16–20: Advanced Concepts
- Callbacks and higher-order functions
- this keyword, arrow functions
- setTimeout, setInterval

Day 21–25: ES6 Features
- Destructuring, spread/rest
- Template literals
- map(), filter(), reduce()

Day 26–30: Projects
- To-do app
- Calculator
- CodeWars practice
      `
    },
  };

const blog = blogPosts[id];

if (!blog) 
{
    return <div className="text-center p-10">Blog post not found.</div>;
}

return (
  
<div className="max-w-3xl mx-auto mt-20 p-6">
    <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
    <p className="text-sm text-gray-500 mb-6">{blog.date} | {blog.author}</p>
    <pre className="whitespace-pre-wrap text-gray-700">{blog.content}</pre>
</div>
    
)
} 