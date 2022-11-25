import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import AnimeList from "./Pages/AnimeList/AnimeList";
import NotFound from "./Pages/NotFound/NotFound";
import AnimePage from "./Pages/AnimePage/AnimePage";
import {useEffect, useState} from "react";
import {RingLoader} from "react-spinners";
import './index.scss'

export default function App() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <>
            {loading ?
                <RingLoader
                    className="loader-spinner"
                    color="mediumpurple"
                    loading={loading}
                    speedMultiplier={1}
                    size={150}
                /> :

                <Routes>

                    <Route path="/" element={<Home/>}/>
                    <Route path="/animelist" element={<AnimeList/>}/>
                    <Route path="/animelist/:id" element={<AnimePage/>}/>
                    <Route path='*' element={<NotFound/>}/>

                </Routes>
            }
        </>
    )
}