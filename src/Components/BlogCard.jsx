import React from "react";

const BlogCard = ({ date, title, readTime, description, tags, image, className }) => {
  return (
    <div className={`bg-gray-100 p-6 rounded-lg flex gap-6 ${className} mt-6 mx-auto shadow-lg`}>
      <div className="flex-1">
        <p className="text-gray-500 text-sm">{date}</p>
        <h2 className="text-xl font-bold text-gray-900 mt-1">{title}</h2>
        <p className="text-gray-500 text-sm mb-4">{readTime} min read</p>
        <p className="text-gray-700 text-l font-bold ">{description}</p>
        <div className="mt-4 flex gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full mt-10 cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <img src={image} alt={title} className="rounded-lg object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default BlogCard;
