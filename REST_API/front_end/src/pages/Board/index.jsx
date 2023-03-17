import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import * as S from "./index.styled";
import { API_PATH, BROWSER_PATH } from "../../constants/path";
import { Link, useParams } from "react-router-dom";

function Boards() {
  const [data, setData] = useState({});
  const params = useParams();

  const requestBoards = useCallback(async () => {
    await axios
      .get(`${API_PATH.BOARD}/${params.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params]);

  useEffect(() => {
    requestBoards();
  }, [requestBoards]);

  return (
    <S.Container>
      <h1>Board</h1>
      <p>id : {data.id}</p>
      <p>title : {data.title}</p>
      <p>content : {data.content}</p>
      <button>
        <Link to={BROWSER_PATH.BASE}>HOME</Link>
      </button>
      <button>
        <Link to={BROWSER_PATH.BOARDS}>BOARDS</Link>
      </button>
      <button>
        <Link to={`${BROWSER_PATH.UPDATE_BOARD}/${params.id}`}>수정</Link>
      </button>
    </S.Container>
  );
}
export default Boards;
