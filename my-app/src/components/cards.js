import React from 'react'
import data from "../data.json"
import Jay from "./Jay.JPG"
import Jay2 from "./Jay.JPG"
import {Link} from "react-router-dom"

let Cards=()=>{
	let cardsData=data.details;
	console.log(cardsData);
	let images=[Jay ,Jay2 ];
	return(
          <div>
            <h1 className="text-primary"> Cards</h1>
            <div className="row justify-content-center">
            {cardsData.map((values,index)=>(
                <div className="col-sm-10 col-md-4 m-1" key={index}>
                  <div className="card">
                  <img src={images[index]} className="img-fluid" alt=""/>
                    <h1>{values.card.name}</h1>
                    <h2 className="text-secondary">{values.card.designation}</h2>
                    <a href={"mailto:"+ values.card.email}><h4>{values.card.email}</h4></a>
                    <h4>{values.card.mobile}</h4>
                    <Link to={{pathname:"/resume" , personcard:{id:index}}}className="btn btn-primary">click me</Link>
                  </div>
                </div>
            ))}
            </div>
           </div>      
		);
};

export default Cards;