import React from "react";
import { Route, Routes as BrowserRoutes } from "react-router-dom";

import { BROWSER_PATH } from "../constants/path";
import { SaveBoard, UpdateBoard, Board, Boards, Main } from "../pages";

function Routes() {
  return (
    <BrowserRoutes>
      <Route path={BROWSER_PATH.BASE} element={<Main />}></Route>
      <Route path={BROWSER_PATH.SAVE_BOARD} element={<SaveBoard />}></Route>
      <Route path={BROWSER_PATH.UPDATE_BOARD}>
        <Route path={":id"} element={<UpdateBoard />} />
      </Route>
      <Route path={BROWSER_PATH.BOARD}>
        <Route path={":id"} element={<Board />} />
      </Route>
      <Route path={BROWSER_PATH.BOARDS} element={<Boards />}></Route>
    </BrowserRoutes>
  );
}
export default Routes;
