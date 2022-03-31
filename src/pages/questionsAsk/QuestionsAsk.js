import React from "react";
import { createQuestions } from "../../apiCall";
import { AskQuestionBox } from "../../components/askQuestionBox/AskQuestionBox";

export const QuestionsAsk = () => {

    const [question, setQuestion] = React.useState({
        title: '',
        body: '',
        tags: '',
    });
    const divRef = React.createRef();
    
    React.useEffect(() => {
        divRef.current.innerHTML = question.body.replace('\n', '<br/>');
    }, [question.body]);

    const handleQuestionCreation = () => {
        createQuestions(question).then(res => {
            if (res.data && res.data.status) {
                console.log(res.data)
            }
        })
    }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4" style={{ position: "relative", top: "50px" }}>
            <h4>Ask a public question</h4>
          </div>
          <div className="col-8">
            <img
              src="https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368"
              height={120}
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <div class="card" style={{ textAlign: "left", padding: "10px" }}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <b>Title</b>
                </label>
                <div style={{ fontSize: "15px" }}>
                  Be specific and imagine you’re asking a question to another
                  person
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={question.title}
                  onChange={(e) => setQuestion({...question, title: e.target.value})}
                  placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <b>Body</b>
                </label>
                <div style={{ fontSize: "15px" }}>
                  Include all the information someone would need to answer your
                  question
                </div>
                <AskQuestionBox question={question} setQuestion={setQuestion} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <b>Tags</b>
                </label>
                <div style={{ fontSize: "15px" }}>
                  Add up to 5 tags to describe what your question is about
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="e.g. React, Javascript"
                  value={question.tags}
                  onChange={(e) => setQuestion({...question, tags: e.target.value})}
                />
              </div>
              <button className="btn btn-primary" onClick={handleQuestionCreation}>Post Questions</button>
            </div>
            <div ref={divRef}></div>
          </div>
          <div className="col-3" style={{ textAlign: "left", padding: '10px' }}>
            <div class="card">
              <div class="card-header">Step 1: Draft your question</div>
              <div class="card-body">
                <p class="card-text">
                  The community is here to help you with specific coding,
                  algorithm, or language problems.
                </p>
                <p class="card-text">Avoid asking opinion-based questions.</p>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      1. Summarize the problem
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>Include details about your goal</li>

                        <li>Describe expected and actual results</li>

                        <li>Include any error messages</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      2. Describe what you’ve tried
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>Show what you’ve tried and tell us what you found (on this site or elsewhere) and why it didn’t meet your needs. You can get better answers when you provide research.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      3. Show some code
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>When appropriate, share the minimum amount of code others need to reproduce your problem (also called a minimum, reproducible example)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion" id="accordionExample" style={{paddingTop: '10px'}}>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Have a non-programming question?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div>
                      Super user
                      <br />
                      Troubleshooting hardware and software issues
                    </div>
                    <div>
                      Software engineering
                      <br />
                      For software development methods and process questions
                    </div>
                    <div>
                      Hardware recommendations
                      <br />
                      Software recommendations
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div class="accordion" id="accordionExample" style={{paddingTop: '10px'}}>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    More helpful links
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div>
                      Find more information about how to ask a good question
                      here
                    </div>
                    <div>Visit the help center</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
