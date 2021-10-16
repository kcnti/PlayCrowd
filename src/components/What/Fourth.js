import { Container, Row, Col } from 'react-bootstrap';

function Fourth() {
    return(
        <>
            <Container style={{ paddingTop: 100, paddingBottom: 160 }}>
                <Row className="Home-bottom" md={2}>
                    <Col xs={8} md={6} style={{ padding: "0 auto" }}>
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <h2>ผู้สร้างโครงการ</h2>
                            <h2>จะได้อะไรบ้าง</h2>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <i style={{ fontSize: 60, color: "#6855ef" }} class="fas fa-money-bill"></i>
                            <p>ผู้สร้างโครงการจะได้เงินสนับสนุนของคุณ เมื่อถึงเป้าหมายที่ตั้งไว้ หากเงินสนับสนุนไม่ถึง 50% ของเป้าหมายที่ตั้งไว้ PlayCrowd จะคืนเงินให้กับผู้สนับสนุนโดยไม่เก็บค่าธรรมเนียมใดๆ</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Fourth;