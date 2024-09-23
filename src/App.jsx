import Layout from "./components/Layout";
import Home from "./pages/home";
import Detail from "./pages/detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          //Layout page
          <Route index element={<Home />} /> // Home page
          <Route path="/:slug" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
