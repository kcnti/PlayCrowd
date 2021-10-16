import { Container, Row, Col } from 'react-bootstrap';
import '../../App.css';

function Second() {
    return(
        <>
            <Container className="What-mid" style={{ paddingTop: 80, paddingBottom: 130 }}>
                <div data-aos="zoom-out">
                    <h3>ทำไมต้อง PlayCrowd</h3>
                </div>
                    <Row style={{ marginTop: 60 }} md={3}>
                        <Col className="What-mid-reason">
                            <div data-aos="fade-right">
                                <i style={{ color: "#843ef3", fontSize: 100, paddingBottom: 20 }} class="fas fa-shield-alt"></i>
                                <h5>เชื่อถือได้ 100%</h5>
                                <p>ทุกโครงการบน PlayCrowd ผ่านการตรวจสอบอย่างละเอียดและทุกโครงการจะมีการอัปเดตความคืบหน้าให้คุณรับทราบอยู่เสมอ</p>
                            </div>
                        </Col>
                        <Col className="What-mid-reason">
                            <div>
                                <i style={{ color: "#843ef3", fontSize: 100, paddingBottom: 20 }} class="fas fa-coins"></i>
                                <h5>สนับสนุนเท่าไหร่ก็ได้</h5>
                                <p>คุณไม่จำเป็นต้องใช้เงินจำนวนมากเพื่อสนับสนุนโครงการที่คุณชื่นชอบ แค่เพียง 20 บาทก็สามารถสนับสนุนโครงการที่คุณชื่นชอบได้แล้ว</p>
                            </div>
                        </Col>
                        <Col className="What-mid-reason">
                            <div data-aos="fade-left">
                                <i style={{ color: "#843ef3", fontSize: 100, paddingBottom: 20 }} class="far fa-handshake"></i>
                                <h5>ได้สนับสนุนโครงการโดยตรง</h5>
                                <p>เงินของคุณจะถูกใช้ไปกับโครงการโดยตรง ไม่หนีไปที่อื่นแน่นอน เพราะเรามีการตรวจสอบและอัพเดตอย่างสม่ำเสมอ</p>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </>
    );
}

export default Second;