import { Row, Col, Container, Nav, Card, Button } from 'react-bootstrap';
import '../../App.css';

function Second(props) {

    const { id, name } = props

    const currentPath = "/campaign/" + id
    const updatePath = "/campaign/" + id + "/update"
    const commentPath = "/campaign/" + id + "/comment"

    return (
        <>
            <Container style={{ paddingTop: 40, paddingBottom: 200 }}>
                <Row stlye={{ columnRule: "1px solid black" }}>
                    <Col xs={8}>
                        <Nav className="Campaign-midl-nav" defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link href={currentPath}>รายละเอียด</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href={updatePath} eventKey="link-1">อัพเดท</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href={commentPath} eventKey="link-2">คอมเมนท์</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <p className="Campaign-midl-detail">โปรเจ็ค combination ทางแฟชั่นอาร์ต แสดงความหลากหลายทางชีวภาพของสัตว์ในอันดับขาปล้องของไทย รวมทั้งบทความสำรวจธรรมชาติวิทยาส่วนตัวของผู้จัดทำ รายอาทิตย์ ตัวอย่าง Art work ที่จะทำ</p>
                    </Col>
                    <Col className="Campaign-midr">
                        <p style={{ fontSize: 10, marginBottom: 10 }}>ผู้รับผิดชอบโครงการ</p>
                        <img
                            className="profilepic"
                            src="/assets/2/image 5.png"
                        />
                        <span style={{ marginLeft: 5 }}>{name} <img src="assets/2/bi_patch-check-fill.png" /></span>
                        <h5>เลือกวิธีบริจาค</h5>
                        <Row md={1}>
                            <Col style={{ padding: 0, marginTop: 10 }}>
                                <Card style={{ borderRadius: 10, border: "1px solid black" }}>
                                    <Card.Body>
                                        <Card.Subtitle style={{ color: "#6855ef", fontSize: 12, paddingBottom: 5 }}>บริจาค 150 บาทขึ้นไป</Card.Subtitle>
                                        <Card.Title style={{ fontSize: 20 }}>จะให้ Digital Stickers กับทาง ผู้สนับสนุน</Card.Title>
                                        <ul style={{ fontSize: 12 }}>
                                            <li>
                                                รายละเอียดเพิ่มเติม
                                            </li>
                                        </ul>
                                        <input 
                                            type="text"
                                            name="donate1"
                                            placeholder="จำนวนเงิน"
                                            className="Campaign-midr-ways"
                                        />
                                        <Button style={{ backgroundColor: "#6855ef", padding: "5px 30px", marginTop: 5, marginLeft: "auto", marginRight: "auto"}}>บริจาค</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Second;