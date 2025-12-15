import quote1 from "../assets/quote.png"
import quote2 from "../assets/quote2.png"
import left from "../assets/left-arrow.png"
import right from "../assets/right-arrow.png"
import Typewriter from "typewriter-effect";
import { useState } from "react";
function Card({name , job , info , image , CardHandler , active , border_color , text_color , text_shadow_color , bg_color}){
  
    const Gradient = ["bg-gradient-to-tl from-[#c2410c] via-[#f97316] to-[#fdba74]" , "bg-gradient-to-tl from-[#3b82f6] via-[#4f46e5] to-[#4338ca]" , "bg-gradient-to-br from-[#91ddcf] via-[#f7f9f2] to-[#e8c5e5]" , "bg-gradient-to-bl from-[#edd2f3] via-[#fffcdc] to-[#84dfff]" , "bg-gradient-to-r from-[#f43f5e] via-[#db2777] to-[#ef4444]" , "bg-gradient-to-r from-[#fef08a] via-[#84cc16] to-[#16a34a]" , "bg-gradient-to-bl from-[#86efac] via-[#fcd34d] to-[#f9a8d4]"]

    const[bgGradient , setGradient] = useState(Gradient[0])

    function decreaseID(){
        if(active==1)
        CardHandler(9);
        else{
            CardHandler(active-1);
        }
        setGradient(Gradient[Math.trunc(Math.random()*6)])
    }
    function increaseID(){
        if(active==9){
            CardHandler(1);
        }
        else{
        CardHandler(active+1);
        }
        setGradient(Gradient[Math.trunc(Math.random()*6)])
    }
    function randomID(){
       CardHandler(Math.trunc((Math.random()*8))+1);
       setGradient(Gradient[Math.trunc(Math.random()*6)])
    }

    return(
        <div className="min-[900px]:w-3/4 w-full mx-auto">
            <div className="min-[500px]:text-4xl text-2xl font-bold text-black text-center mb-2"> <Typewriter
          options={{
            strings: [
              "Age of Legends",
              "Hall of Heroes",
              "Meet the Heroes",
             
            ],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 50,
          }}></Typewriter>
          </div>

             <div className={`${bg_color} w-[150px] h-[5px] mx-auto mb-5`}></div>
        <div className={`flex flex-col justify-center items-center w-2/3 mx-auto ${bgGradient}  rounded-lg  shadow-black py-5 px-3 gap-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition duration-800 `}>
            <img className={`w-[150px] h-[150px] rounded-full border-t-8 border-r-8 ${border_color} `} src={image}  />
            <div className="select-none">
                <h1 className="text-2xl font-bold text-center">{name}</h1>
                <h2 className={`text-lg ${text_color} text-shadow-black text-shadow-xs text-center mb-5`}>{job}</h2>
                <div className="flex flex-row justify-center items-center"><img className="w-[30px]" src={quote2} /></div>
                <h2 className={`text-black opacity-80 text-shadow-2xs ${text_shadow_color} text-center`}>{info}</h2>
                 <div className="flex flex-row justify-center items-center mb-5"><img className="w-[30px]" src={quote1} /></div>
                <div className="flex flex-row justify-center items-center min-[750px]:w-1/8 w-1/4 mx-auto mb-5  gap-x-4">
                    <button onClick={decreaseID} className="cursor-pointer hover:scale-105 hover:brightness-125"><img className="w-3/4" src={left}  /></button>
                    <button onClick={increaseID} className="cursor-pointer hover:scale-105 hover:brightness-125"><img className="w-3/4" src={right}  /></button>
                </div>
                <div className="flex flex-row justify-center items-center"> <button onClick={randomID} className={`${bg_color} px-7 py-2 text-white font-bold text-lg rounded-md cursor-pointer hover:brightness-75`}>Surprise Me</button></div>
            </div>
        </div>
        </div>
    )
}

export default Card;