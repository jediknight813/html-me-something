import React from "react";
import '../index.css';
import ProjectDisplay from './ProjectDisplay.js'


const Content = () => {
    const website_projects = require('../JsonData/websiteProjects.json');
    const game_projects = require('../JsonData/gameProjects.json')


    return (
        <div className=" min:w-full min-h-screen h-auto flex flex-col items-center gap-10">


            <div className=" relative text-center text-white mt-24 shadow-2xl drop-shadow-2xl">
                <img className="min-w-full lg:max-w-[1000px] lg:max-h-[750px] grayscale-[60%] rounded-md" alt="programing background" src="https://static.vecteezy.com/system/resources/previews/003/335/579/large_2x/desktop-source-code-and-wallpaper-by-coding-and-programming-free-photo.jpg"/>
                <h1 className="centered_text font-['Permanent_Marker'] text-2xl lg:text-5xl">my journey so far</h1>
            </div>

            <p className=" w-[95%] font-sans lg:w-[1000px] text-white font-light bg-slate-700 p-10 rounded-lg shadow-2xl drop-shadow-2xl">My web development journey started over a year ago when I started the Odin project, an open source bootcamp that teaches full-stack web development. Here are some of the projects I have made since then.</p>
            
            {website_projects.websites.map(project => <ProjectDisplay Type={"website"} Project={project}/>) }
            

            <p className=" w-[95%] font-light lg:w-[1000px] text-white font-sans bg-slate-700 p-10 rounded-lg shadow-2xl drop-shadow-2xl">The reason I got into programming was because I wanted to make games. I have made lots of simple games using scratch, python, unity and finally godot which is the game engine i currently use, here are some of the games i made using godot.</p>

            {game_projects.games.map(game => <ProjectDisplay Type={"game"} Project={game}/>) }

        </div>
    )
}

export default Content

