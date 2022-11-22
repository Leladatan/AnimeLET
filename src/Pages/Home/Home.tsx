import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import '../../index.scss'
import {animeData} from "../../Store/storeAnime";


export default function Home() {
    return (
        <>
            <Header/>
            <main className="main">
                <div className="container">
                    <div className="main__content">
                        <div className="main__content_title">
                            <h2>This season's Anime</h2>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}