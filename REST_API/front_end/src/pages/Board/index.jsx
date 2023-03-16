import axios from "axios";
import React, { useState } from "react";
import { API_PATH } from "../../constants/path";

import * as S from "./index.styled";

// https://jsonplaceholder.typicode.com/
function Board() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getTitle = (e) => {
    setTitle(e.target.value);
  };

  const getContent = (e) => {
    setContent(e.target.value);
  };

  const requestAddBoard = (title, content) => {
    axios
      .post(API_PATH.POST, {
        title: title,
        content: content,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setTitle("");
    setContent("");
  };

  return (
    <S.Container>
      <h1>Board</h1>
      <input type={"text"} placeholder={"title"} onChange={getTitle}></input>
      <input type={"text"} placeholder={"content"} onChange={getContent}></input>
      <button type={"submit"} onClick={() => requestAddBoard(title, content)}>
        전송
      </button>
    </S.Container>
  );
}
export default Board;
