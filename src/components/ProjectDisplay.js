import React from "react";


const ProjectDisplay = ( { Project, Type } ) => {



    return( 
        <div className=" w-[95%] min-h-[200px] bg-slate-700 flex flex-col items-center text-white lg:font-extrabold lg:w-[800px] p-4 gap-2 shadow-2xl drop-shadow-2xl rounded-md">
            <h1 className=" w-full text-2xl font-['Permanent_Marker']">{Project.title}</h1>
            {Type === "website" &&
                 <h2 className=" w-full">Source Code: <a className=" text-blue-500 truncate" href={Project.source_code} rel="noreferrer" target="_blank"> {Project.source_code} </a> </h2>
            }
            {Type === "website" &&
                  <h3 className=" w-full">Website Link: <a className=" text-blue-500 truncate" href={Project.website_link} rel="noreferrer" target="_blank"> {Project.website_link} </a></h3>
            }
            {Type === "game" &&
                  <h3 className=" w-full">Game Link: <a className=" text-blue-500 truncate" href={Project.website_link} rel="noreferrer" target="_blank"> {Project.website_link} </a></h3>
            }
           
            <p className=" font-sans font-light w-full">{Project.text}</p>

            <div className=" w-full flex overflow-x-auto h-[320px] dark:[color-scheme:dark] gap-8 mt-4">
                {Project.images.map(image => <img className="max-h-[300px] max-w-[500px]" src={image} alt={Project.title}/>)}
            </div>

        </div>
    )
}


export default ProjectDisplay

