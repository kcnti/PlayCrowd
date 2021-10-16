import React, { useRef, useState } from 'react';
import NavbarT from '../components/NavbarT';
import Footer from '../components/Footer';
import { useAuth } from '../contexts/AuthContext';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import getUser from '../contexts/getCurrentUser';
import { motion } from 'framer-motion';

export default function Profile() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { updateEmail, updatePassword, logout } = useAuth();
    const currentUser = getUser();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    if(!currentUser) {
        history.push('/')
    }

    function handleSubmit(e) {
        console.log('asdf')
        e.preventDefault();

        console.log("pass" + passwordRef.current.value, passwordConfirmRef.current.value)

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('รหัสผ่านไม่ตรงกัน')
        }

        const promises = []
        setError('')
        setLoading(true)

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        }

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value));
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('มีบางอย่างผิดพลาด')
        }).finally(() => {
            setLoading(false)
        })
    }

    async function handleLogout() {
        setError('')
        
        try {
            await logout();
            history.push('/')
        } catch {
            setError('มีบางอย่างผิดพลาด')
        }
    }

    return (
        <>
            <NavbarT />
                <motion.div
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                <Container style={{ paddingTop: 200, paddingBottom: 200 }}>
                    <h2 className="mb-4">จัดการบัญชี</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label class="pt-3">อีเมล</Form.Label>
                            <Form.Control type="email" required ref={emailRef} defaultValue={currentUser ? currentUser.email : history.push('/')} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label class="pt-3">รหัสผ่าน</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="รหัสผ่านใหม่" />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label class="pt-3">ยืนยันรหัสผ่าน</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder="ยืนยันรหัสผ่านใหม่" />
                        </Form.Group>
                        <Button disabled={loading} style={{ marginTop: 20, backgroundColor: "#6855ef" }} type="submit">อัพเดท</Button>
                        <Button disabled={loading} style={{ marginTop: 20, marginLeft: 10 }} variant="secondary" onClick={handleLogout}>ล็อคเอาต์</Button>
                    </Form>
                </Container>
                </motion.div>
            <Footer />
        </>
    )
}
