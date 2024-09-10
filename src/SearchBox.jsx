import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({update}){

    let[city,setCity]=useState("");
    let[Error,setError]=useState(false);
    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e083abca82d641cf9c30c58b96efeb5d";

    let getInfo=async ()=>{
        try{
        let response=await fetch(`${API_URL}?q=${city}&APPID=${API_KEY}&units=metric`);
        let jsonResponce=await response.json();
        console.log(jsonResponce);
        let result={
            city:city,
            temp:jsonResponce.main.temp,
            tempMin:jsonResponce.main.temp_min,
            maxTemp:jsonResponce.main.temp_max,
            humidity:jsonResponce.main.humidity,
            weather:jsonResponce.weather[0].description
           
        }
        return result;
    }catch(err){throw err};
              
    }
    
    
    let onChange=(e)=>{
      setCity(e.target.value);
    }
    let formHandel= async (e)=>{
        try{
        e.preventDefault();
        console.log(city);
        setCity("");
         let ninf= await getInfo();
         update(ninf);
        }catch(err){
            setError(true);
            
        }
    }
    return(
        <div>
            
            <form onSubmit={formHandel}>
            <TextField id="city" label="city" variant="outlined" value={city} required onChange={onChange}/>
            <br/><br/>
            <Button variant="contained" type='submit'>search</Button>
            {Error && <p>This place is not available</p>}
            

            </form>
        </div>
    )
}