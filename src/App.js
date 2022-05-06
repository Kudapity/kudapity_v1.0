import Registration from "./components/MainPage/Registration";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/MainPage/Login";
import Home from "./components/MainPage/Home";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Layout/>}>
                  <Route index  element={<Home/>}/>
                  <Route  path={'/signup'} element={<Registration/>}/>
                  <Route  path={'/login'} element={<Login/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
