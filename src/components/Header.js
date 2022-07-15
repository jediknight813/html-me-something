import React, { useState } from "react";
import '../index.css';


const Header = () => {
    const [header_drop_down_class, set_header_drop_down_class] = useState("drop_down_hidden")
    const [click_check, set_click_check] = useState("click_check_hidden")


    function check_if_show_drop_down_menu() {
        if (header_drop_down_class === "drop_down_hidden") {
            set_header_drop_down_class("drop_down_shown")
            set_click_check("click_check_showen")
        }
        else {
            set_header_drop_down_class("drop_down_hidden")
            set_click_check("click_check_hidden")
        }
    }

    return (
        <div className=" bg-slate-800 w-full h-14 flex items-center justify-center shadow-2xl text-white font-['Permanent_Marker'] drop-shadow-2xl fixed top-0 z-10">
            
        <div className=" w-full h-full lg:w-[1200px] flex items-center ">
            <h1 onClick={() => window.scrollTo({left: 0,top: 0, behavior: "smooth"})} className="ml-5 text-4xl cursor-pointer"> Opus </h1>
            
            <div className=" ml-auto"></div>


            <button onClick={() => check_if_show_drop_down_menu()} className="lg:hidden mr-5 text-2xl"> <i class="fa fa-bars"></i> </button>

            <div className={header_drop_down_class}>
                <div className=" w-full h-full bg-slate-700 flex flex-col items-center gap-5 pt-5 pb-5 max-h-[125px] shadow-2xl">
                    <button onClick={() => window.scrollTo({left: 0,top: 5380, behavior: "smooth"})} className="button_menu ease-in-out duration-300 w-full text-center"> Games </button>
                    <button onClick={() => window.scrollTo({left: 0,top: 570, behavior: "smooth"})} className="button_menu ease-in-out duration-300 w-full text-center"> Websites </button>
                </div>
            </div>

            <div onClick={() => check_if_show_drop_down_menu()} className={click_check}></div>

            <button onClick={() => window.scrollTo({left: 0,top: 5000, behavior: "smooth"})} className="hidden lg:inline mr-5 button_menu ease-in-out duration-300"> Games </button>
            <button onClick={() => window.scrollTo({left: 0,top: 900, behavior: "smooth"})} className="hidden lg:inline mr-5 button_menu ease-in-out duration-300"> Websites </button>
        </div>

    </div>
    )
}

export default Header

