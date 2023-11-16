import { Route, Routes } from "react-router-dom";
import Home from './views/Home/Home'
import NavBar from "./components/NavBar/NavBar";
import Detail from "./views/Detail/Detail";
import Admin from "./views/Admin/Admin";
import style from './App.module.css'

function App() {

  return (
    <div className={style.appContainer}>

      <NavBar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/detail/:id"
          element={<Detail />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

      </Routes>

    </div>
  )
}

export default App
