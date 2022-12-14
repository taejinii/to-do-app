import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import Nav from "./pages/Nav";
import useFetch from "./util/useFecth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
const Home = lazy(() => import("./Home"));
function App() {
  const [tasks, isPending, error] = useFetch("http://localhost:3001/data");
  console.log(tasks);
  console.log(error);
  return (
    <BrowserRouter>
      {error && <div>{error}</div>}
      <div className="App">
        <Nav />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={<Home tasks={tasks} isPending={isPending} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/singnup" element={<Signup />} />
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
