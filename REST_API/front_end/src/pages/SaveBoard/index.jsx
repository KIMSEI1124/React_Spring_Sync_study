import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_PATH, BROWSER_PATH } from "../../constants/path";

import * as S from "./index.styled";

function Board() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getTitle = (e) => {
    setTitle(e.target.value);
  };

  const getContent = (e) => {
    setContent(e.target.value);
  };

  const requestAddBoard = async (title, content) => {
    await axios
      .post(API_PATH.BOARD, {
        title: title,
        content: content,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };

  return (
    <S.Container>
      <h1>Board</h1>
      <input type={"text"} placeholder={"title"} onChange={getTitle}></input>
      <input type={"text"} placeholder={"content"} onChange={getContent}></input>
      <button type={"submit"} onClick={() => requestAddBoard(title, content)}>
        전송
      </button>
      <button>
        <Link to={BROWSER_PATH.BASE}>HOME</Link>
      </button>
    </S.Container>
  );
}
export default Board;
