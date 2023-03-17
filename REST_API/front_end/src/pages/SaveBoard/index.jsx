import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_PATH, BROWSER_PATH } from "../../constants/path";

import * as S from "./index.styled";

function Board() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const getTitle = (e) => {
    setTitle(e.target.value);
  };

  const getContent = (e) => {
    setContent(e.target.value);
  };

  // https://www.inflearn.com/questions/307133/image-%EC%A0%84%EC%86%A1%EA%B3%BC-%ED%95%A8%EA%BB%98-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%8A%94-json%EC%9C%BC%EB%A1%9C-%EB%B3%B4%EB%82%B4%EA%B3%A0-%EC%8B%B6%EC%9D%80-%EA%B2%BD%EC%9A%B0
  // https://velog.io/@me-hana/Base64%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EC%A0%84%EB%8B%AC%ED%95%B4%EB%B3%B4%EC%9E%90-1-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%A0%80%EC%9E%A5-Encoding
  const encodeFileToBase64 = (fileBlob) => {
    if (fileBlob) {
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      reader.onload = () => {
        setImage(reader.result + "");
      };
    } else {
      setImage("");
    }
  };

  const requestAddBoard = async (title, content, image) => {
    await axios
      .post(API_PATH.BOARD, {
        title: title,
        content: content,
        image: image,
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
      <input
        type={"file"}
        name={"image"}
        id={"file"}
        accept={"image/*"}
        onChange={(e) => {
          encodeFileToBase64(e.target.files[0]);
        }}
      />
      <button type={"submit"} onClick={() => requestAddBoard(title, content, image)}>
        전송
      </button>
      <button>
        <Link to={BROWSER_PATH.BASE}>HOME</Link>
      </button>
    </S.Container>
  );
}
export default Board;
