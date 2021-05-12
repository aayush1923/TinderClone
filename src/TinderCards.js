import TinderCard from "react-tinder-card";
import React, { useState } from 'react';
import "./TinderCards.css";

function TinderCards() {
    const [people,setPeople] = useState([
        {
            name:"Elon Musk",
            url:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
        },
        {
            name:"Jeff Bezos",
            url:"https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4eee5edefef91840a6eaf441c64b613e",

        },
        {
            name:"MUKESH",
            url:"https://img.jagranjosh.com/imported/images/E/GK/Mukesh-Ambani-biography.jpg",

        },
        {
            name:"Warren Buffett",
            url:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5babb7f1a7ea4342a948b79a%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D748%26cropX2%3D3075%26cropY1%3D1753%26cropY2%3D4082",

        }
    ]);

    const swiped=(direction,nameToDelete)=>{
        console.log("removing:"+nameToDelete);
        
  

    };
     const outOfFrame=(name)=>{
         console.log(name+" Left the Screen !");
     };

    return (
        <div className='tinderCards'>
           <div className='tindercards_Container'>
               {people.map((person) => (
                 <TinderCard 
              className="swipe"
              key={person.name}
              preventSwipe={["up","down"]}
              onSwipe={(dir) =>swiped(dir,person.name)}
              onCardLeftScreen={()=>outOfFrame(person.name)}>
              

                   
                       <div style={{backgroundImage:`url(${person.url})`}} className="card">
                       <h3>{person.name}</h3>


                       </div>
                   </TinderCard>
       
          
        ))}

        </div>
        </div>
    );
}

export default TinderCards;
