import Registration from "./components/Forms/Registration";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/MainPage/Home";
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path={'/'} element={<Home/>}/>
              <Route exact path={'/login'} element={<Registration/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
