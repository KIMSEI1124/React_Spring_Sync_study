import { Suspense } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./router";
import Loading from "./pages/Loading";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </Router>
  );
}

export default App;
