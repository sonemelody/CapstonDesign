import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Challenge from "./components/challenge";
import Rank from "./components/rank";
import Layout from "./components/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/rank" element={<Rank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
