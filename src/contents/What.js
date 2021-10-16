import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import Footer from '../components/Footer';
import NavbarT from '../components/NavbarT';

import First from '../components/What/First';
import Second from '../components/What/Second';
import Third from '../components/What/Third';
import Fourth from '../components/What/Fourth';
import Fifth from '../components/What/Fifth';

import { motion } from 'framer-motion';

function LandingWhatPage() {
    window.scrollTo(0,0); 
    return(
        <>
        <NavbarT />
            <motion.div
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <First />
                <div style={{ borderBottom: "1px solid black" }}></div>
                <Second />
                <div style={{ borderBottom: "1px solid black" }}></div>
                <Third />
                <div style={{ borderBottom: "1px solid black" }}></div>
                <Fourth />
                <div style={{ borderBottom: "1px solid black" }}></div>
                <Fifth />
            </motion.div>
        <Footer />
        </>
    );
}

export default LandingWhatPage;