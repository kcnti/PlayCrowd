import Footer from "../components/Footer";
import NavbarT from "../components/NavbarT";
import First from "../components/Term/First";
import Second from "../components/Term/Second";

function Tos() {
    return(
        <>
            <NavbarT />
                <First />
                <div style={{ border: "1px solid black" }}></div>
                <Second />
            <Footer />
        </>
    );
}

export default Tos;