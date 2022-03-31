import React from "react";
import { useNavigate } from "react-router-dom";
import { cookie, searchQuestions } from "../../apiCall";
import { Context } from "../../Context";
import "./Header.css";

export const Header = () => {

  const { state, dispatch } = React.useContext(Context);
  const navigate = useNavigate();
  const name = cookie.get('name');
  const [search, setSearch] = React.useState([]);
  const [searchSelect, setSearchSelect] = React.useState(true);
  
  const getQuestion = (searchText) => {
    searchQuestions(searchText).then(res => {
      setSearch(res.data.questions)
    })
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light top-bar">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => navigate('/')}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0" style={{paddingLeft: '6%'}}>
              <li class="nav-item" onClick={() => navigate('/')}>
                <a
                  class="nav-link active -logo js-gps-track"
                  aria-current="page"
                  href="#"
                >
                  <span class="-img _glyph">Stack Overflow</span>
                  <span style={{ marginLeft: "10px" }}>
                    Stack <b>Overflow</b>
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  For Team
                </a>
              </li>
            </ul>
            <form class="d-flex" style={{ width: "50%", marginLeft: '30px' }}>
              <input
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => getQuestion(e.target.value)}
                onFocus={() => setSearchSelect(true)}
                // onBlur={() => setSearchSelect(false)}
              />
              
            </form>
            
            {!state.isAuthenticated ? 
            <span class="nav-item" style={{ padding: "10px" }}>
              <a
                href="/users/login"
                class="login-link s-btn s-btn__filled py8 js-gps-track"
                rel="nofollow"
              >
                Log in
              </a>
              <a
                href="/users/signup"
                class="login-link s-btn s-btn__primary py8"
                rel="nofollow"
                style={{marginLeft: '10px', backgroundColor: '#0a95ff', color: '#ffffff'}}
              >
                Sign up
              </a>
            </span> : <span
                href=""
                class="login-link  py8 js-gps-track"
                rel="nofollow"
                style={{marginLeft: '10px'}}
              >
                Hello {name}
              </span> }
          </div>
        </div>
      </nav>
      {searchSelect ?
              <div class="container" style={{marginLeft: '200px', position: 'absolute'}}>
                <div className="row">
                <div className="col-4"></div>
                  {/* <SearchResult /> */}
                  <ul className=" list-group col-4">
                  {search.map(item => 
                  <li class="list-group-item" style={{padding: '10px', textAlign: 'center', cursor: 'pointer'}} onClick={() => {
                    navigate(`/questions/${item._id}/${item.title}`);
                    setSearchSelect(false);
                  }
                    } >
                    {item.title} </li>
                  )}
                  </ul>
                  <div className="col-4"></div>
                </div>
              </div> : null}
    </>
  );
};
