import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";
import Acholder from "./Acholder";
import Acdetail from "./Acdetail";
import Addnew from "./Addnew";
import AcEdit from "./AcEdit";
import Fac from "./Fac";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Acholder" element={<Acholder />} />
        <Route path="/Acdetail/:id" element={<Acdetail />} />
        <Route path="/AcEdit/:id" element={<AcEdit />} />
        <Route path="/Addnew" element={<Addnew />} />
        <Route path="/fac" element={<Fac />} />
      </Route>
    </Routes>
  </BrowserRouter>
);