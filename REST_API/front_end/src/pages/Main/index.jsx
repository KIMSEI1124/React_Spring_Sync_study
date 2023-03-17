import React from "react";
import { Link } from "react-router-dom";
import { BROWSER_PATH } from "../../constants/path";

import * as S from "./index.styled";

function Main() {
  return (
    <S.Container>
      <Link to={BROWSER_PATH.SAVE_BOARD}>
        <button>SaveBoard로 이동</button>
      </Link>
      <Link to={BROWSER_PATH.BOARDS}>
        <button>Boards로 이동</button>
      </Link>
    </S.Container>
  );
}
export default Main;
