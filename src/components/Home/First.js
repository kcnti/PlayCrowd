import { Row, Col, Container, Button } from 'react-bootstrap';
import '../../App.css';
import { goToCampaign } from '../../functions/scrollTo';

function First() {
    return(
        <>
        <div style={{ backgroundColor: "#eeedf3" }}>
            <Container id="Home" style={{ paddingTop: 245, paddingBottom: 200 }}>
                <Row className="Home-top">
                    <Col>
                        <div data-aos="fade-down-right" className="Home-left">
                            <h3 style={{ paddingTop: 5 }}>เป็นส่วนหนึ่งของ</h3>
                            <h3 style={{ paddingTop: 5 }}><span style={{ color: "#6855ef" }}>โปรเจค</span> ที่คุณชอบ</h3>
                            <p>สนับสนุนโครงการที่คุณชอบได้อย่างไร้กังวลเพราะเราให้คุณติดตามสถานะทุกโครงการได้เสมอ</p>
                            <Button className="Home-rightButton" onClick={() => goToCampaign()} style={{ backgroundColor: "#6855ef" }}>ดูโครงการน่าสนับสนุน</Button>
                            <Button variant="light" className="Home-leftButton" style={{ border: "1px solid black" }}>ทำไมต้อง PlayCrowd</Button>
                        </div>
                    </Col>
                    <Col className="Home-right">
                        <div data-aos="fade-down-left">
                            <img
                                alt=""
                                src="/assets/1/frame.png"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}

export default First;