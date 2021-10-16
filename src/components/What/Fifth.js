import { Container, Row, Col } from 'react-bootstrap';

function Fifth() {
    return(
        <>
            <Container style={{ paddingTop: 100, paddingBottom: 160 }}>
                <Row className="Home-bottom" md={2}>
                    <Col xs={8} md={6} style={{ padding: "0 auto" }}>
                        <div data-aos="fade-right" data-aos-duration="1000"><h2>แล้วเราจะได้อะไร?</h2></div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <i style={{ fontSize: 60, color: "#6855ef" }} class="fas fa-coins"></i>
                            <p>PlayCrowd มีเป้าหมายที่จะสนับสนุนโครงการของทุกคนให้เป็นจริง เราจึงเก็บค่าธรรมเนียมแบบยุติธรรมที่สุด เริ่มต้นเพียง <span style={{ color: "#6855ef" }}>3%</span> สำหรับโครงการที่มูลค่าไม่ถึง 50,000 บาทโดยจะเก็บจากผู้สร้างโครงการเท่านั้น</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Fifth;