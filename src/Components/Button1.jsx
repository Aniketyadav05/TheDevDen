import React from "react";
import { Link } from "react-router-dom";

const Button = ({ icon:Icon, text, link, className,onClick }) => {
  return (
    <Link
    onClick={onClick}
      to={link}
      className={`bg-orange-500 h-10 w-10 flex items-center justify-center rounded-full shadow-lg font-extrabold hover:scale-110 hover:bg-orange-700 transition ${className}`}
    >
      {Icon ? <Icon className={` text-black`}/> : <span className="text-black">{text}</span>}
    </Link>
  );
};

export default Button;
