import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_PATH, BROWSER_PATH } from "../../constants/path";

import * as S from "./index.styled";

function UpdateBoard() {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const params = useParams();

  const getContent = (e) => {
    setContent(e.target.value);
  };

  const requestUpdateBoard = async (content) => {
    const id = params.id;
    await axios
      .put(`${API_PATH.BOARD}/${id}`, {
        content: content,
      })
      .then(() => {
        alert("내용 수정에 성공하였습니다.");
        navigate(-1);
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };

  return (
    <S.Container>
      <h1>Board</h1>
      <input type={"text"} placeholder={"content"} onChange={getContent}></input>
      <button type={"submit"} onClick={() => requestUpdateBoard(content)}>
        전송
      </button>
      <button>
        <Link to={BROWSER_PATH.BASE}>HOME</Link>
      </button>
    </S.Container>
  );
}
export default UpdateBoard;
