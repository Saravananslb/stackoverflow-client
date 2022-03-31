import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQuestions } from "../../apiCall";
import { QuestionBox } from "../../components/questionBox/QuestionBox";
import { RightSideBar } from "../../components/rightSideBar/RightSideBar";
import { SideBar } from "../../components/sidebar/SideBar";

export const Questions = () => {
  const navigate = useNavigate();
  const { questionId, questionText } = useParams();
  const [questions, setQuestions] = React.useState({});
  const [answers,setAnswers] = React.useState([]);
  const divRef = React.createRef();

  React.useEffect(() => {
    getQuestions(questionId).then((res) => {
      if (res.data) {
        setQuestions(res.data.questions.questions);
        setAnswers(res.data.questions.answers);
        console.log(divRef, res.data.questions.body.replace("\n", "<br/>"));
      }
    });
  }, [questionId]);

  // React.useEffect(() => {
  //   divRef.current.innerHTML = questions.body.replace('\n', '<br/>');
  // }, [divRef.current])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-9">
                <h3>{questions.title}</h3>
                <div className="row" style={{ fontSize: "15px" }}>
                  <div className="col-2">Asked today</div>
                  <div className="col-2">Modified today</div>
                  <div className="col-2">Viewed 9 times</div>
                </div>
              </div>
              <div className="col-3">
                <button
                  className="btn"
                  style={{
                    float: "right",
                    backgroundColor: "rgb(10, 149, 255)",
                    color: "#ffffff",
                  }}
                  onClick={() => navigate("/questions/ask")}
                >
                  Ask Question
                </button>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div className="col-1">
                    <div className="row">
                      <svg
                        aria-hidden="true"
                        class="svg-icon iconArrowUpLg"
                        fill="#525960"
                        style={{ color: "#525960" }}
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                      >
                        <path d="M2 25h32L18 9 2 25Z"></path>
                      </svg>
                    </div>
                    <div className="row" style={{ marginLeft: "5px" }}>
                      137
                    </div>
                    <div className="row">
                      <svg
                        aria-hidden="true"
                        class="svg-icon iconArrowDownLg"
                        fill="#525960"
                        style={{ color: "#525960" }}
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                      >
                        <path d="M2 11h32L18 27 2 11Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col-11">
                    <div className="row">
                      <div
                        dangerouslySetInnerHTML={{ __html: questions.body }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                {answers.map(item =>
                <div className="row">
                  <hr/>
                  <div className="col-1">
                    <div className="row">
                      <svg
                        aria-hidden="true"
                        class="svg-icon iconArrowUpLg"
                        fill="#525960"
                        style={{ color: "#525960" }}
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                      >
                        <path d="M2 25h32L18 9 2 25Z"></path>
                      </svg>
                    </div>
                    <div className="row" style={{ marginLeft: "5px" }}>
                      137
                    </div>
                    <div className="row">
                      <svg
                        aria-hidden="true"
                        class="svg-icon iconArrowDownLg"
                        fill="#525960"
                        style={{ color: "#525960" }}
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                      >
                        <path d="M2 11h32L18 27 2 11Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col-11">
                    <div className="row">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      ></div>
                    </div>
                  </div>
                </div>)}
                <div className="row">
                  <p>
                    Know someone who can answer? Share a link to this question
                    via email, Twitter, or Facebook.
                  </p>
                  <h5 style={{ textAlign: "left" }}>Your Answer</h5>
                  <QuestionBox />
                </div>
              </div>
              <div className="col-4">
                <RightSideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
