import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import AnimeList from "./Pages/AnimeList/AnimeList";
import NotFound from "./Pages/NotFound/NotFound";
import AnimePage from "./Pages/AnimePage/AnimePage";

export default function App() {
    return (
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/animelist" element={<AnimeList/>}/>
            <Route path="/animelist/:id" element={<AnimePage/>}/>
            <Route path='*' element={<NotFound/>}/>

        </Routes>
    )
}