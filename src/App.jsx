
import{useState} from 'react';
import  React from 'react';




/*import img1 from './assets/img-1.jfif'
import img2 from './assets/img-2.jpg'
import img3 from './assets/img-3.webp'
import img4 from './assets/img-4.jpg'
import img5 from './assets/img-5.webp'
import img6 from './assets/img-6.jpg'
import img7 from './assets/img-7.jpeg'*/

import source from "./source.json";
import   Logic  from './Logic';
import './App.css'


function App() {
  
  return (
  
      <div className="wrapper">
      
        {source.map((id,sources) => {
          return(
        
          <Logic key={id} source={sources} />
            
          );
        })}
         
        
       </div>
        
       
      
  );
}

export default App;

{/*<ArrowLeftIcon className="icon" />
      <ul className="corousel">
        <li className="card">
          <div className="img">
            <img src={getImageUrl("img-1.jfif")} alt="first-image" draggable="false"/>
          </div>
          <h2>First Image</h2>
          <span>Watermelon</span>
        </li>*/}
        {/*<li className="card">
          <div className="img">
            <img src={getImageUrl("img-2.jpg")} alt="second-image" draggable="false"/>
          </div>
          <h2>Second Image</h2>
          <span>Orange</span>
        </li>
        <li className="card">
          <div className="img">
            <img src={getImageUrl("img-3.webp")} alt="third-image" draggable="false"/>
          </div>
          <h2>Third Image</h2>
          <span>Apple</span>
        </li>
        <li className="card">
          <div className="img">
            <img src={getImageUrl("img-4.jpg")} alt="fourth-image" draggable="false"/>
          </div>
          <h2>Fourth Image</h2>
          <span>Fruit Basket</span>
        </li>
        <li className="card">
          <div className="img">
            <img src={getImageUrl("img-5.webp")} alt="fifth-image" draggable="false"/>
          </div>
          <h2>Fifth Image</h2>
          <span>Fruits Spread</span>
        </li>
        <li className="card">
          <div className="img">
            <img src={getImageUrl("img-6.jpg")} alt="sixth-image" draggable="false"/>
          </div>
          <h2>Sixth Image</h2>
          <span>Dragon Fruit</span>
        </li>
        <li className="card">
          <div className="img">
            <img src={getImageUrl("../img-7.jpeg")} alt="seventh-image" draggable="false"/>
          </div>
          <h2>Seventh Image</h2>
          <span>Fruit Platter</span>
        </li>*
      </ul>
      <ArrowRightIcon  className="icon" id="right"/>*/}