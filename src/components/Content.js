import React from "react";
import '../index.css';


const Content = () => {

    return (
    <div className=" w-full min-h-screen h-auto flex flex-col items-center">
        <div className=" relative text-center text-white mt-16 shadow-2xl drop-shadow-2xl">
            <img className="min-w-full lg:max-w-[1000px] lg:max-h-[750px] grayscale-[60%] rounded-sm" alt="programing background" src="https://static.vecteezy.com/system/resources/previews/003/335/579/large_2x/desktop-source-code-and-wallpaper-by-coding-and-programming-free-photo.jpg"/>
            <h1 className="centered_text font-['Permanent_Marker'] text-2xl lg:text-5xl">my journey so far</h1>
        </div>
    </div>
    )
}

export default Content

