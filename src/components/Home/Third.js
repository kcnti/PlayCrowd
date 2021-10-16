import { Container, Row, Col } from 'react-bootstrap';

function Third() {
    return(
        <>
            <div style={{ backgroundColor: "#eeedf3" }}>
                <Container style={{ paddingTop: 100, paddingBottom: 160 }}>
                    <Row className="Home-bottom">
                        <Col xs={12} md={6} style={{ padding: "0 auto" }}>
                            <div className="content-leftside" data-aos="fade-right">
                                <h2>คุณจะได้อะไร จากการสนับสนุนบ้าง</h2>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="content-rightside" data-aos="fade-left">
                                <i style={{ fontSize: 60, color: "#6855ef" }} class="fas fa-cubes"></i>
                                <p>คุณสามารถเลือกแพคเพจการสนับสนุนได้ โดยแต่ละโครงการ ก็จะมีสิ่งตอบแทนที่แตกต่างกันไป เช่น สนับสนุนโครงการ 300 บาท ได้ขึ้นชื่อบนเครดิต เป็นต้น</p>
                                <i style={{ fontSize: 60, color: "#6855ef" }} class="fas fa-crosshairs"></i>
                                <p>คุณสามารถติดตามผลการดำเนินการของโครงการที่คุณสนับสนุนได้ให้ทุกบาทของคุณมีคุณค่าต่อโครงการจริงๆ</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Third;