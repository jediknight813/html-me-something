import React from "react";
import '../index.css';
import ProjectDisplay from './ProjectDisplay.js'


const Content = () => {
    const website_projects = require('../JsonData/websiteProjects.json');


    return (
    <div className=" w-full min-h-screen h-auto flex flex-col items-center gap-10">


        <div className=" relative text-center text-white mt-16 shadow-2xl drop-shadow-2xl">
            <img className="min-w-full lg:max-w-[1000px] lg:max-h-[750px] grayscale-[60%] rounded-sm" alt="programing background" src="https://static.vecteezy.com/system/resources/previews/003/335/579/large_2x/desktop-source-code-and-wallpaper-by-coding-and-programming-free-photo.jpg"/>
            <h1 className="centered_text font-['Permanent_Marker'] text-2xl lg:text-5xl">my journey so far</h1>
        </div>

        <p className=" w-[95%] lg:w-[1000px] text-white font-sans bg-slate-700 p-10 rounded-lg shadow-2xl drop-shadow-2xl">my web development journey started over a year ago when i started the odin project, an open source bootcamp that teaches full-stack web development, here are some of the projects i made from that course.</p>
        
        {website_projects.websites.map(project => <ProjectDisplay Project={project}/>) }
        
    </div>
    )
}

export default Content

