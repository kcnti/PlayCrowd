import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function Second() {

    const [id, setId]               = useState();
    const [purpose, setPurpose]     = useState();
    const [title, setTitle]         = useState();
    const [donateNow, setDonateNow] = useState();
    const [donateTarget, setDonateTarget] = useState();
    const [imagePath, setImagePath] = useState();

    const [error, setError]         = useState();

    useEffect(() => {
        fetch("https://api.kanti.pw/playcrowd/data/1")
        .then(res => res.json())
        .then((result) => {
            let data = result.result;
            if (data === "CAMPAIGN_NOT_FOUND") {
                return setError("ไม่พบโครงการ")
            } else {
                setId("/campaign/"+data[0].id)
                setPurpose(data[0].purpose)
                setTitle(data[0].campaign_name)
                setDonateNow(data[0].donated)
                setDonateTarget(data[0].money)
            }
        })
    })

    const percentage = (100/donateTarget) * donateNow;

    return(
        <>
            <Container id="Home-middle" style={{ paddingTop: 100 }}>
                <h2 style={{ paddingTop: 5 }}>โครงการมาแรง 🔥</h2>
                <Row md={3} style={{ paddingBottom: 200 }}>
                    <Col style={{ marginTop: 10 }}>
                        <Link to={id} style={{ textDecoration: "none" }}>
                            <Card style={{ border: "1px solid black", borderRadius: 10 }}>
                                <Card.Img variant="top" src="/assets/2/image 5.png" />
                                <Card.Body>
                                    <Card.Text className="Home-mid-card-type">{purpose}</Card.Text>
                                    <Card.Title className="Home-middle-text" style={{ marginTop: "-15px", paddingBottom: 10 }}>{title}</Card.Title>
                                    <span className="Home-middle-text" style={{ float: "left" }}>{donateNow} บาท</span>
                                    <span className="Home-middle-text" style={{ display: "flex", justifyContent: "right", textAlign: "right" }}>{percentage}%</span>
                                    <Card.Title><ProgressBar className="Home-middle-text" variant="custom-progress-bar" now={percentage} label={`${donateNow}/${donateTarget} บาท`}></ProgressBar></Card.Title>
                                    <span className="Home-middle-text" style={{ display: "flex", justifyContent: "left", textAlign: "right" }}>เหลืออีก 21 วัน</span>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Second;