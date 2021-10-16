import { Container, Row, Col, Button, Alert, Form } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import '../App.css';

function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/")
        } catch {
            setError('อีเมลหรือรหัสผ่านผิด')
        }
        setLoading(false)
    }

    function goBack() {
        window.location.href = "/"
    }

    return (
        <>
                <Row>
                    <Col id="signin-left">
                        <div className="Signin-left">
                            <div className="Signin-left-content">
                                <img
                                    alt=""
                                    src="/assets/1/group.png"
                                    width="20"
                                    height="20"
                                    style={{ marginBottom: 8 }}
                                    className="d-inline-block align-center"
                                />
                                <span> PlayCrowd</span>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <motion.div
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div style={{ display: "flex", justifyContent: "right", paddingRight: 60, paddingTop: 60 }}>
                            <i onClick={() => goBack()} style={{ cursor: "pointer", color: "#6855ef" }} class="far fa-arrow-alt-circle-left fa-3x"></i>
                        </div>
                        <Container>
                            <div className="Signin-right">
                                <Form onSubmit={handleSubmit}>
                                    {error && <Alert variant="danger">{error}</Alert>}
                                    <h3>เข้าสู่ระบบ</h3>
                                    <p>มาเริ่มทำโครงการของคุณให้เป็นจริงกัน!</p>
                                    <Form.Group id="email">
                                        <Form.Label>อีเมล</Form.Label>
                                        <Form.Control type="email" required ref={emailRef} />
                                    </Form.Group>
                                    <Form.Group className="mt-3" id="password">
                                        <Form.Label>รหัสผ่าน</Form.Label>
                                        <Form.Control type="password" required ref={passwordRef} />
                                    </Form.Group>
                                    <Button disabled={loading} type="submit" style={{ marginTop: 20, backgroundColor: "#6855ef" }}>เข้าสู่ระบบ</Button>
                                </Form>
                                    <div className="mt-3">
                                        <Link to="/forgot-password">ลืมรหัสผ่าน</Link>
                                    </div>
                                    <div className="mt-3">
                                        ยังไม่มีบัญชี? <Link to="/signup">สมัคร</Link>
                                    </div>
                            </div>
                        </Container>
                        </motion.div>
                    </Col>
                </Row>
        </>
    );
}

export default Login;