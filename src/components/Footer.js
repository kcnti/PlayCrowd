import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

function Footer(props) {

    const { pos } = props

    return (
        <>
            <footer id="Footer" style={{ textAlign: 'left', backgroundColor: '#000c1c', padding: 20, ...pos }}>
                <Row md={2}>
                    <Col>
                        <img
                            alt=""
                            src="/assets/1/group.png"
                            width="20"
                            height="20"
                            className="d-inline-block align-left"
                        />
                        <span style={{ color: "white", fontWeight: "bolder", fontSize: 20, marginLeft: 10 }}>PlayCrowd</span>
                        <p style={{ color: "rgb(128, 128, 128)", fontSize: 13, marginLeft: 20 }}>Support ideas you love</p>
                    </Col>
                    <Col style={{ display: "flex", justifyContent: "right" }}>
                        <Link to="/whatisplaycrowd">อะไรคือ PlayCrowd</Link>
                        <Link to="/contact" className="Footer-contact">ติดต่อเรา</Link>
                    </Col>
                </Row>
            </footer>
        </>
    );
}

export default Footer;