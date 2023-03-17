import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import * as S from "./index.styled";
import { API_PATH, BROWSER_PATH } from "../../constants/path";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading";

function Boards() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const requestBoards = useCallback(async () => {
    setLoading(true);
    await axios
      .get(`${API_PATH.BOARD}/${params.id}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params]);

  useEffect(() => {
    requestBoards();
  }, [requestBoards]);

  if (loading) {
    return <Loading />;
  }

  return (
    <S.Container>
      {data && (
        <>
          <h1>Board</h1>
          <p>id : {data.id}</p>
          <p>title : {data.title}</p>
          <p>content : {data.content}</p>
          <img src={data.image.img} alt=""></img>
        </>
      )}
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
