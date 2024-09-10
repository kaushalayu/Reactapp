import { useState } from "react";

import Infob from "./Infob";
import SearchBox from "./SearchBox";
import "./weather.css"

export default function Weather(){
    let[weather,setWeather]=useState({

        city:"Chill",
        weather:24,
        humidity:24,
        maxTemp:45,
        tempMin:45,
        temp:34
    })
    let update=(res)=>{
        setWeather(res);
    }
    return(
        <div className="weather">
 <h1 className="H">Weather App</h1>
 <SearchBox update={update}/>
 <br/>
 <Infob inf={weather} />
        </div>
       
    )
}