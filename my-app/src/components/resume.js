import React from 'react'
import data from "../data.json"
// import logo from "../logo.svg"
// import logo2 from "../logo.svg"
import Jay from "./Jay.JPG"

function Resume(props) {
	let profile=data.details[props.location.personcard.id];
	console.log(profile);
	
	return (
	    <div className="row">
	      <div className="col-sm-10 col-md-3 m-1" >
                <div className="card  bg-info text-dark border border-warning">
                <img src={Jay} className="card-img-top" alt="profile images"/>
                    <h1>{profile.card.name}</h1>
                    <h2>{profile.card.designation}</h2>
                    <a href={"mailto:"+ profile.card.email}>
                    <h4 className="text-dark">{profile.card.email}</h4>
                    </a>
                    <h4>{profile.card.mobile}</h4>
                </div>
            </div>
            <div className="col-sm-10 col-md-8 m-2 text-left bg-warning border border-info" >
              <h3 className="text-uppercase text-info">Career Objective</h3>
              <p>{profile.cobj}</p>
              <h3 className="text-uppercase text-info">Educational Qualification</h3>
              <ul>
              <li>{profile.ed[0]}</li>
              <li>{profile.ed[1]}</li>
              <li>{profile.ed[2]}</li>
              </ul>
              <h3 className="text-uppercase text-info">Technical Skills</h3>
              <dl className="row">
              <dt className="col-sm-3">Programming Languages:</dt>
              <dd className="col-sm-9">{profile.ts[0]}</dd>
              <dt className="col-sm-3">Web Technologies:</dt>
              <dd className="col-sm-9">{profile.ts[1]}</dd>
              <dt className='col-sm-3'>Operating Systems:</dt>
              <dd className="col-sm-9">{profile.ts[2]}</dd>
             </dl>
             <h3 className="text-uppercase text-info">Awards</h3>
             <ul>
             <li>{profile.aw[0]}</li>
             <li>{profile.aw[1]}</li>
             </ul>
             <h3 className="text-uppercase text-info">Achievements</h3>
             <ul>
             <li>{profile.achm[0]}</li>
             <li>{profile.achm[1]}</li>
             </ul>


            </div>
	    </div>
    );
}

export default Resume;