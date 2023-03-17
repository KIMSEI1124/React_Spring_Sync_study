import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import * as S from "./index.styled";
import { API_PATH, BROWSER_PATH } from "../../constants/path";
import { Link } from "react-router-dom";

function Boards() {
  const [data, setData] = useState({});

  const requestBoards = useCallback(async () => {
    await axios
      .get(API_PATH.BOARDS)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const requestDeleteBoard = async (id) => {
    console.log(id);
    await axios
      .delete(`${API_PATH.BOARD}/${id}`)
      .then(() => {
        alert("정상적으로 삭제되었습니다.");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    requestBoards();
  }, [requestBoards]);

  return (
    <S.Container>
      <h1>data count : {data.count}</h1>
      {data.boards &&
        data.boards.map((board) => {
          return (
            <div key={board.id}>
              <span>title : </span>
              <Link to={`${BROWSER_PATH.BOARD}/${board.id}`}>
                <span>{board.title}</span>
              </Link>
              <p>content : {board.content}</p>
              <button type={"submit"} onClick={() => requestDeleteBoard(board.id)}>
                삭제하기
              </button>
            </div>
          );
        })}
      <button>
        <Link to={BROWSER_PATH.BASE}>HOME</Link>
      </button>
    </S.Container>
  );
}
export default Boards;
