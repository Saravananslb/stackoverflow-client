import React from "react";
import { useParams } from "react-router-dom";
import { addPost } from "../../apiCall";
import './QuestionBox.css';

export const QuestionBox = () => {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [value, setValue] = React.useState("");
  const [comments, setComments] = React.useState('');
  const {questionId} = useParams();

  React.useEffect(() => {
    if (selectedOption === "BOLD") {
      setValue('<b>Your Text Here</b>');
    }
    else if (selectedOption === "ITALIAN") {
      setValue('<i>Your Text Here</i>');
    }
    else if (selectedOption === "HYPERLINK") {
      setValue('<a href="Hyper link here">Test here</a>');
    }
    else if (selectedOption === "QUOTES") {
      setValue('"Your Text Here"');
    }
    else if (selectedOption === "CURLY") {
      setValue('{Your Text Here}');
    }
    else if (selectedOption === "ATTACHMENT") {
      setValue()
    }
    else if (selectedOption === "HEADINGS") {
      setValue('<h2>Your Text Here</h2>')
    }
    setSelectedOption('');
    setComments( value );
  }, [selectedOption]);

  const handlePost = () => {
    addPost({ answer: comments, questionId}).then(res => {
      if (res.data) {
        console.log(res.data)
      }
    })
  }

  return (
    <>
      <div class="card">
        <div class="card-header qstn-head">
          <span
            className={selectedOption === "BOLD" ? "selected" : ""}
            onClick={() => setSelectedOption("BOLD")}
          >
            B
          </span>
          <span
            className={selectedOption === "ITALIAN" ? "selected" : ""}
            onClick={() => setSelectedOption("ITALIAN")}
          >
            I
          </span>
          <span
            className={selectedOption === "HYPERLINK" ? "selected" : ""}
            onClick={() => setSelectedOption("HYPERLINK")}
          >
            Hyperlink
          </span>
          <span
            className={selectedOption === "QUOTES" ? "selected" : ""}
            onClick={() => setSelectedOption("QUOTES")}
          >
            ''
          </span>
          <span
            className={selectedOption === "CURLY" ? "selected" : ""}
            onClick={() => setSelectedOption("CURLY")}
          >
            {"{}"}
          </span>
          <span
            className={selectedOption === "ATTACHMENT" ? "selected" : ""}
            onClick={() => setSelectedOption("ATTACHMENT")}
            style={{ width: "10px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              viewBox="0 0 512 512"
            >
              <path d="M447.1 32h-384C28.64 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM111.1 96c26.51 0 48 21.49 48 48S138.5 192 111.1 192s-48-21.49-48-48S85.48 96 111.1 96zM446.1 407.6C443.3 412.8 437.9 416 432 416H82.01c-6.021 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.334-16.68l70-96C142.1 290.4 146.9 288 152 288s9.916 2.441 12.93 6.574l32.46 44.51l93.3-139.1C293.7 194.7 298.7 192 304 192s10.35 2.672 13.31 7.125l128 192C448.6 396 448.9 402.3 446.1 407.6z" />
            </svg>
          </span>
          <span
            className={selectedOption === "HEADINGS" ? "selected" : ""}
            onClick={() => setSelectedOption("HEADINGS")}
          >
            Headings
          </span>
        </div>
        <div class="card-body">
          <textarea
            name=""
            id=""
            cols="90"
            rows="10"
            value={comments}
            onChange={(e) => setComments( e.target.value )}
          ></textarea>
        </div>
      </div>
      <div style={{position: 'relative', top: '10px', textAlign: 'left'}}>
          <button className="btn btn-primary" onClick={handlePost}>Post Your Answer</button>
          <span style={{marginLeft: '10px', color: '#c22e32'}}>Discard</span>
      </div>
    </>
  );
};
