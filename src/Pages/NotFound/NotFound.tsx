import Header from "../../Components/Header/Header";
import '../../index.scss';
import Footer from "../../Components/Footer/Footer";

export default function NotFound() {
    return (
        <>
            <Header/>
            <main className="main">
                <div className="container">
                    <div className="main__content">
                        <h2 className="error-message">NotFound</h2>
                        <p className="error-info">
                            Please go to the main page to continue...
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}