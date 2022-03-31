import React from "react";
const homeImg = require("../../assets/home.png");

export const Home = () => {
  return (
    <>
      <div>
        <img src={homeImg} style={{ width: "90%" }} alt="" />
      </div>
      <div className="container" style={{padding: '20px 100px'}}>
        <div className="row">
          <div class="card col" style={{ width: "15rem",backgroundColor: '#f39f86',
backgroundImage: 'linear-gradient(315deg, #f39f86 0%, #f9d976 74%)' }}>
            <img src="https://cdn.sstatic.net/Img/home/illo-public.svg?v=14bd5a506009" class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title">A public platform building the definitive collection of coding questions & answers</h3>
              <p class="card-text">
              A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.
              </p>
              <a href="#" class="btn" style={{backgroundColor: '#f2740D', color: '#ffffff'}}>
                Join the Community
              </a>
            </div>
          </div>
          <div class="card col" style={{ width: "15rem", marginLeft: '20px', backgroundColor: '#d5fefd',
backgroundImage: 'linear-gradient(315deg, #d5fefd 0%, #fffcff 74%)' }}>
            <img src="https://cdn.sstatic.net/Img/home/illo-teams.svg?v=7e543f14fcc0" class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="card-title">A private collaboration & knowledge sharing SaaS platform for companies</h3>
              <p class="card-text">
              A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge.
              </p>
              <a href="#" class="btn btn-primary">
                For large Organization
              </a>
              <a href="#" class="btn btn-primary" style={{marginLeft: '10px'}}>
                For small Teams
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
