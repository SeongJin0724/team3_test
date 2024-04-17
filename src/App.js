import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/section/Main";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Pages1 = lazy(() => import("./pages/Pages1"));
const Pages2 = lazy(() => import("./pages/Pages2"));
const Pages3 = lazy(() => import("./pages/Pages3"));
const Pages4 = lazy(() => import("./pages/Pages4"));
const MyPage = lazy(() => import("./pages/MyPage"));
const Saved = lazy(() => import("./pages/Saved"));
const MenPage = lazy(() => import("./pages/MenPage"));
const WomenPage = lazy(() => import("./pages/WomenPage"));

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
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
