import React from "react";
import { Route, Routes as BrowserRoutes } from "react-router-dom";

import { BROWSER_PATH } from "../constants/path";
import { Board, Main } from "../pages";

function Routes() {
  return (
    <BrowserRoutes>
      <Route path={BROWSER_PATH.BASE} element={<Main />}></Route>
      <Route path={BROWSER_PATH.BOARD} element={<Board />}></Route>
    </BrowserRoutes>
  );
}
export default Routes;
