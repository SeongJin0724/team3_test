import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/section/Main";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Pages1 = lazy(() => import("./pages/Pages1"));
const Pages2 = lazy(() => import("./pages/Pages2"));
const Pages3 = lazy(() => import("./pages/Pages3"));
const Pages4 = lazy(() => import("./pages/Pages4"));
const Standards = lazy(() => import("./pages/Standards"));
const Policy = lazy(() => import("./pages/Policy"));
const Penalty = lazy(() => import("./pages/Penalty"));
const Guideline = lazy(() => import("./pages/Guideline"));
const Notice = lazy(() => import("./pages/Notice"));
const Service = lazy(() => import("./pages/Service"));
const Storeinfo = lazy(() => import("./pages/Storeinfo"));
const Acceptance = lazy(() => import("./pages/Acceptance"));
const Company = lazy(() => import("./pages/Company"));
const Talented = lazy(() => import("./pages/Talented"));
const Partnership = lazy(() => import("./pages/Partnership"));
const Terms = lazy(() => import("./pages/Terms"));
const Personal = lazy(() => import("./pages/Personal"));
const Question = lazy(() => import("./pages/Question"));
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
          <Route path="/standards" element={<Standards />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/penalty" element={<Penalty />} />
          <Route path="/guideline" element={<Guideline />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/service" element={<Service />} />
          <Route path="/storeinfo" element={<Storeinfo />} />
          <Route path="/acceptance" element={<Acceptance />} />
          <Route path="/company" element={<Company />} />
          <Route path="/talented" element={<Talented />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/question" element={<Question />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
