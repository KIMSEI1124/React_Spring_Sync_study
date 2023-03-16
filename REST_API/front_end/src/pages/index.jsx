import { lazy } from "react";

const Board = lazy(() => import("./Board/index"));
const Main = lazy(() => import("./Main/index"));

export { Board, Main };
