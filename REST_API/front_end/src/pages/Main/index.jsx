import React from "react";
import { Link } from "react-router-dom";
import { BROWSER_PATH } from "../../constants/path";

import * as S from "./index.styled";

function Main() {
  return (
    <S.Container>
      <Link to={BROWSER_PATH.BOARD}>
        <button>Board로 이동</button>
      </Link>
    </S.Container>
  );
}
export default Main;
