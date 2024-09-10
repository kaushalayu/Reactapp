
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Infob({inf}){
        const INT_URL="https://images.unsplash.com/photo-1688931460634-403858ed3690?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const HOT_URL="https://images.unsplash.com/photo-1543379352-68ea413990d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        const RAN_URL="https://images.unsplash.com/photo-1691265690307-47c9a0cffb0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="170 "
            image={inf.humidity>80?RAN_URL: inf.temp>15?HOT_URL:INT_URL}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {inf.city}&nbsp;{
              inf.humidity>80 ? <ThunderstormIcon/> : inf.temp>15 ?< WbSunnyIcon/>:<AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                <p> temp={inf.temp}&deg;C</p>
                <p>maxTemp={inf.maxTemp}</p>
                <p>Hmidity={inf.humidity}</p>
          
            </Typography>
          </CardContent>
       
        </Card>
      );
}