import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import AnimeList from "./Pages/AnimeList/AnimeList";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/animelist" element={<AnimeList/>}/>

    </Routes>
  )
}