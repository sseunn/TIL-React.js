import "./App.css";
import { useState } from "react";

function App() {
  // let post = "강남우동 맛집";
  // let posts = "파이썬 독학";
  let [글제목, b] = useState([
    "남자 코트 추천",
    "강남우동 맛집",
    "파이썬 독학",
  ]);

  let [logo, setLogo] = useState("React Blog");
  let [date, setDate] = useState("2월 17일 발행");
  let [따봉, 따봉변경] = useState(0);
  function 함수() {
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4> {logo}</h4>
      </div>
      <button onClick={() => {}}> 글수정 </button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(1);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>{date}</p>
      </div>
      <Modal></Modal>
    </div>
  );
}
export default App;

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
