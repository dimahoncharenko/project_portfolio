import { Routes, Route } from "react-router-dom";

import { IndexRoute } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexRoute />} />
    </Routes>
  );
}

export default App;
