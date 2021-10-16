import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import '../../App.css';

function First(props) {

    const { purpose, title, detail, donateNow, donateTarget } = props

    const percentage = (100/donateTarget) * donateNow;
    console.log(percentage)

    return(
        <>
            <Container className="Campaign" style={{ paddingTop: 180, paddingBottom: 200 }}>
                <Row md={2}>
                    <Col>
                        <p className="Campaign-top-type">{purpose}</p>
                        <h1>{title}</h1>
                        <p className="Campaign-top-detail">{detail}</p>
                        <p className="Campaign-top-progress">ยอดบริจาคตอนนี้ {donateNow} / {donateTarget} บาท</p>
                        <ProgressBar now={percentage} label={`${percentage}%`}></ProgressBar>
                        <Button style={{ border: "1px solid black", marginTop: 50 }} variant="warning">บริจาคเลย</Button>
                    </Col>
                    <Col>
                        <img 
                            src="/assets/2/image 5.png"
                            width="500px"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default First;