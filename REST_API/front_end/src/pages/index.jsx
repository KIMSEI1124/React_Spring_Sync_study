import { lazy } from "react";

const SaveBoard = lazy(() => import("./SaveBoard/index"));
const UpdateBoard = lazy(() => import("./UpdateBoard/index"));
const Board = lazy(() => import("./Board/index"));
const Boards = lazy(() => import("./Boards/index"));
const Main = lazy(() => import("./Main/index"));

export { SaveBoard, UpdateBoard, Board, Boards, Main };
