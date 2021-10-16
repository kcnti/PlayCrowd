import Footer from '../components/Footer';
import First from '../components/Home/First';
import Second from '../components/Home/Second';
import Third from '../components/Home/Third';
import NavbarT from '../components/NavbarT';

function LandingHomePage() {

    window.scrollTo(0,0); 

    return(
        <>
        <NavbarT />
            <First />
            <div style={{ borderBottom: "1px solid black" }}></div>
            <Second />
            <div style={{ borderBottom: "1px solid black" }}></div>
            <Third />
        <Footer />
        </>
    );
}

export default LandingHomePage;