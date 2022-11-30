import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import AnimeList from "./Pages/AnimeList/AnimeList";
import NotFound from "./Pages/NotFound/NotFound";
import AnimePage from "./Pages/AnimePage/AnimePage";
import {FC, useEffect, useState} from "react";
import {RingLoader} from "react-spinners";
import Page from "./Components/Page/Page";

const App: FC = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);

    return (
        <>
            {loading ?
                <RingLoader
                    className="loader-spinner"
                    color="mediumpurple"
                    loading={loading}
                    speedMultiplier={1}
                    size={150}/> :
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Page>
                                <Home/>
                            </Page>
                        }
                    />
                    <Route
                        path="/animelist"
                        element={
                            <Page>
                                <AnimeList/>
                            </Page>
                        }
                    />
                    <Route
                        path="/animelist/:id"
                        element={
                            <Page>
                                <AnimePage/>
                            </Page>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <Page>
                                <NotFound/>
                            </Page>
                        }
                    />
                </Routes>}
        </>
    );
};
export default App;