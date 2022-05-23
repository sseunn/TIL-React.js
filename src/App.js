import "./App.css";
import { useState } from "react";

function App() {
  // let post = "강남우동 맛집";
  // let posts = "파이썬 독학";
  let [글제목, b] = useState("남자 코트 추천");
  let [글제목2, c] = useState("강남우동 맛집");
  let [글제목3, d] = useState("파이썬 독학");
  let [logo, setLogo] = useState("React Blog");
  let [date, setDate] = useState("2월 17일 발행");

  return (
    <div className="App">
      <div className="black-nav">
        <h4> {logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4>{글제목2}</h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4>{글제목3}</h4>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default App;
