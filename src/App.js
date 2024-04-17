import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/section/Main";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Pages1 = lazy(() => import("./pages/Pages1"));
const Pages2 = lazy(() => import("./pages/Pages2"));
const Pages3 = lazy(() => import("./pages/Pages3"));
const Pages4 = lazy(() => import("./pages/Pages4"));
const Ins = lazy(() => import("./pages/Ins"));
const Policy1 = lazy(() => import("./pages/Policy1"));
const Policy2 = lazy(() => import("./pages/Policy2"));
const Guideline = lazy(() => import("./pages/Guideline"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages1" element={<Pages1 />} />
          <Route path="/pages2" element={<Pages2 />} />
          <Route path="/pages3" element={<Pages3 />} />
          <Route path="/pages4" element={<Pages4 />} />
          <Route path="/ins" element={<Ins />} />
          <Route path="/policy1" element={<Policy1 />} />
          <Route path="/policy2" element={<Policy2 />} />
          <Route path="/guideline" element={<Guideline />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
