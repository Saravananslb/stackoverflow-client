import React from "react";
import "./SideBar.css";

export const SideBar = () => {
  return (
    <>
      <ul class="list-group -side-ul" style={{ color: "#525960"}}>
        <li class="list-group -side spacing-15 left" style={{cursor: 'pointer'}}>Home</li>
        <li class="list-group -side spacing-5 left">PUBLIC</li>
        <li class="list-group -side spacing-5 center">Questions</li>
        <li class="list-group -side spacing-5 center">Tags</li>
        <li class="list-group -side spacing-5 center">Users</li>
        <li class="list-group -side spacing-15 left">TEAMS</li>
      </ul>
      <div class="card" >
      <img class="wmx100 mx-auto my8 h-auto d-block" width="139" height="114" src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e" alt="" />
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">
          <b>Stack Overflow for Teams</b> – Collaborate and share knowledge with a private group.
          </p>
          <a href="#" class="btn btn-primary">
            Create a free Team
          </a>
          <p>What is Teams ?</p>
        </div>
      </div>
    </>
  );
};
