import React, { useState, useEffect } from "react";
import Header from "./Header";

const Home = () => {
  // var data =[];
  const [photos, setphotos] = useState([]);
  const [genre, setgenre] = useState([]);
  async function api() {
    let headersList = {
      Accept: "*/*",
      "X-RapidAPI-Key": "3c167df8a0mshc710c4056e2586ep15a737jsndc883e8d1f05",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    };

    let response = await fetch(
      "https://movie-database-alternative.p.rapidapi.com",
      {
        method: "GET",
        headers: headersList,
      }
    );

    const data = await response.json();

    //  const my = Object.values(data);
    //  const mi = Object.keys(data);
    setphotos(data);
    setgenre(data[0]);
    //  console.log(data);
    // data = JSON.stringify(data);
    //  setphotos(data);
  }

  useEffect(() => {
    api();
  }, []);
   
  console.log(photos.genre);

  return (
    <div>
      <Header />
      <div className="container m-5 row fs-3 ">Top 100 Movie by IMDB</div>
      {photos.map((data, i) => {
        // const {Title,Year} =data;
        return (
          <div className="card container ">
            <div className="row m-4">
              {" "}
              <div className="col-2 ms-3   ">
              <img src="https://logodix.com/logo/52887.jpg" style={{height:"70px",width:"90px"}}></img>
              <h2 className="ps-4 pt-2 pb-2">{data.rank}</h2>
            
              <img src="https://logodix.com/logo/52827.png" style={{height:"70px",width:"90px" }}></img>
              <label className="ps-3">Rank</label>
              </div>
              
              <div className="col">
             <img src={data.image} style={{height:"240px",width:"180px"}}></img>
              </div>
              <div className="col-6">
                <div>
                <h3 className="row ps-2">{data.title}</h3>
                </div>
               
               <div><p>{data.description}</p></div>
                <div className="row fs-5 text-black-50">
                  <b className="col-3">Genere:</b><label className="col">Drama</label>
                  </div>
                  <div className="row fs-5 text-black-50">
                  <b className="col-3">Director:</b><label className="col">Frsnk</label>
                  </div>
                  <div className="row fw-lighter mt-4 ">
                  <b className="col ">Year:</b><label className="col">{data.year}</label> | <b className="col" >Rating:</b><label className="col">{data.rating}</label>|<b className="col" >IMDBID:</b><label className="col">{data.imdbid}</label>
                  </div>
                  
             
                </div>
             
            </div>
            <div className="row">
            <button className="btn btn-info  fs-4" ><a className="text-white" href={data.trailer} >Watch Trailer</a></button>
            </div>
          </div>
        );
      })}
      {/* {photos?.map(data=>
    <div className='card col-3 container' style={{width: "18rem"}} key={data}> <h5 className='card-title text-center'>{data[2]}</h5>
    <p className='card-text'>{data[1]}</p>
    <img src={data[12]} class="card-img-top" alt="..." height={200} width="200px"></img>
        </div>
        
    ) } */}
    </div>
  );
};

export default Home;
