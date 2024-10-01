import { useState } from "react";
import { getImageUrl } from "../utils";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import source from "./source.json";
   const Logic =() => {  
    const [curr,setCurr] =useState(0)
    const prevSlide = () => {
      setCurr(curr === source.length-1?0:curr+1)
    } 
    const nextSlide =() => {
      setCurr(curr === 0 ? source.length-1: curr +1);
    }

  return (
    <>
   
    
      <ArrowLeftIcon className="icon"  />
      <ul className="corousel">
      {source.map(sources => 
        curr === sources && (
          
          <li key={sources.id} className="card">
          <div className="img">
            <img src={getImageUrl(sources.imgSrc)} alt={sources.title} draggable="false"/>
          </div>
          <h2>{sources.title}</h2>
          <span>{sources.names}</span>
        </li>
        
        )
      )}
        </ul>
        <ArrowRightIcon  className="icon" id="right" />
        
    
    </>
  
      );
}
export default Logic;



