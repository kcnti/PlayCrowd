import { Container, Row, Col } from 'react-bootstrap';

function Third() {
    return(
        <>
            <Container style={{ paddingTop: 100, paddingBottom: 160 }}>
                <Row className="Home-bottom" md={2}>
                    <Col xs={8} md={6} style={{ padding: "0 auto" }}>
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <h2>คุณจะได้อะไร</h2>
                            <h2>จากการสนับสนุนบ้าง</h2>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <i style={{ fontSize: 60, color: "#6855ef" }} class="fas fa-cubes"></i>
                            <p>คุณสามารถเลือกแพคเพจการสนับสนุนได้ โดยแต่ละโครงการ ก็จะมีสิ่งตอบแทนที่แตกต่างกันไป เช่น สนับสนุนโครงการ 300 บาท ได้ขึ้นชื่อบนเครดิต เป็นต้น</p>
                            <i style={{ fontSize: 60, color: "#6855ef" }} class="fas fa-crosshairs"></i>
                            <p>คุณสามารถติดตามผลการดำเนินการของโครงการที่คุณสนับสนุนได้ให้ทุกบาทของคุณมีคุณค่าต่อโครงการจริงๆ</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Third;