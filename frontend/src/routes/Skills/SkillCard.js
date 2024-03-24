import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import ".././style.css"
export default function SkillCard({image, name}) {
  return (
    <div className='skill-card'>
      <CardActionArea style={{backgroundColor:"black"}}>
       <img src={image} alt="Java Image" className='language-logo'/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{color:'white'}}>
            {name}
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </div>
  );
}