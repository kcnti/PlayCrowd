import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import Footer from '../components/Footer';
import NavbarT from '../components/NavbarT';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../App.css';

function Contact() {

    window.scrollTo(0, 0);

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { uploadMessage } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            await uploadMessage(nameRef.current.value, emailRef.current.value, messageRef.current.value)
            setSuccess('ส่งข้อความสำเร็จ!');
        } catch (e) {
            console.log(e)
            setError('มีบางอย่างผิดพลาด')
        }
    }

    return (
        <>
            <div style={{ overflowY: "hidden" }}>
                <NavbarT />
                <motion.div
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Container style={{ paddingTop: 200, paddingBottom: 190 }}>
                        <Row>
                            <Col sm={8}>
                                <div data-aos="fade-right">
                                {error && <Alert variant="danger">{error}</Alert>}
                                {success && <Alert variant="success">{success}</Alert>}
                                    <h3>เราพร้อมตอบคุณทุกคำถาม</h3>
                                    <h3>ทักมาคุยกับเราได้เลย!</h3>
                                    <Form onSubmit={handleSubmit}>
                                    <Row md={2}>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>ชื่อ</Form.Label>
                                                <Form.Control type="text" required ref={nameRef} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>อีเมล</Form.Label>
                                                <Form.Control type="email" required ref={emailRef} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3">
                                        <Form.Label>ข้อความ</Form.Label>
                                        <Form.Control as="textarea" rows={5} ref={messageRef} />
                                    </Form.Group>
                                    <Button type="submit" style={{ backgroundColor: "#6855ef" }}>ส่งข้อความ!</Button>
                                    </Form>
                                </div>
                            </Col>
                            <Col className="social-container-left" sm={4}>
                                <div className="social-left" data-aos="fade-left">
                                    <h3>ช่องทางอื่น ๆ</h3>
                                    <h3>สำหรับติดต่อเรา</h3>
                                    <div className="social">
                                        <div className="social-facebook">
                                            <a href="#" style={{ textDecoration: 'none' }}>
                                                <i style={{ color: "#6855ef" }} class="fab fa-facebook"></i><span> Playcrowd</span>
                                            </a>
                                        </div>
                                        <br />
                                        <div className="social-twitter">
                                            <a href="#" style={{ textDecoration: 'none', paddingTop: 30 }}>
                                                <i style={{ color: "#6855ef" }} class="fab fa-twitter"></i><span> Playcrowd1</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </motion.div>
                <Footer />
            </div>
        </>
    );
}

export default Contact;