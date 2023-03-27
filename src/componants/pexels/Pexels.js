import { Popover } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from "react";

const Pexels = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [photo, setphoto] = useState([]);
  const show = true;
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    Authorization: "1mz55YwbEcHrdpr8LV4WJgydGLQTLFfn4x7VB5H92YRxFvwUoCrGQjUh",
    "Content-Type": "application/json",
  };

  async function api() {
    let response = await fetch(
      "https://api.pexels.com/v1/curated/?page=2&per_page=15",
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await response.json();

    setphoto(data.photos);
  }
  useEffect(() => {
    api();
  }, []);

  console.log(photo);
  return (
    <div className="container">
      <div className="container m-5 p-5"></div>
      <div className="container">
        {photo.map((p) => {
          return (
            <div className=" divji">
              <div class={show ? "card  cardji" : "card  cardji card1"}>
                <img
                  class="card-img-top p-4 pb-2"
                  src={p.src.original}
                  alt="Card image cap"
                  style={{ height: "480px", width: "360px" }}
                ></img>
                <div class="p-4">
                  <div className="panel">
                    

                   
                    <Button
                    className=" btn btn-default"
                      aria-describedby={id}
                      variant="contained"
                      onClick={handleClick}
                    >
                     Image Details
                    </Button>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                     
                    >
                      <Typography sx={{ p: 2 ,width:"380px", height:"200px"}}>
                      <div className="">
                      <p class="card-title text-black-50 col">ID:{p.id}   |   <a
                        href={p.url}
                        class=" col"
                        style={{ fontStyle: "", textDecoration: "none" }}
                      >
                        Get it on pexels
                      </a></p>{" "}
                      
                    </div>
                    
                   
                      Photographer : {p.photographer}
                   <br></br>
                     Photographer URL : {p.photographer_url}
                    <br></br>
                     Photographer ID : {p.photographer_id}
                    <br></br>
                     Orignal Height X Width: {p.height}X{p.width}


                      </Typography>
                    </Popover>

                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pexels;
