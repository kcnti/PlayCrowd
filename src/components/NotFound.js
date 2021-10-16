import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <Container style={{ paddingTop: 250, paddingBottom: 400 }}>
                <h2 className="text-center">ไม่พบโครงการ</h2>
                <Link to="/">
                    <Button className="mt-5" style={{ marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }}>กลับไปหน้าแรก</Button>
                </Link>
            </Container>
        </>
    )
}
