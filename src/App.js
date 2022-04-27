import Registration from "./components/MainPage/Registration";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/MainPage/Home";
import Layout from "./components/Layout";
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Layout/>}>
                  <Route index  element={<Home/>}/>
                  <Route  path={'/signUp'} element={<Registration/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
