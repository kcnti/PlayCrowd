import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import getUser from '../contexts/getCurrentUser';
import '../App.css';

function NavbarT() {

    const currentUser = getUser();

    const location = useLocation();
    const history = useHistory();
    
    const goToCampaign = () => {
        let path = location.pathname
        console.log('path' + path)
        try {
            if(path !== "/") {
                history.push('/#Home-middle')
            } else {
                var element = document.getElementById("Home-middle").offsetTop;
                window.scrollTo(0, element)
            }
        } catch {
            var element = document.getElementById("Home-middle").offsetTop;
            window.scrollTo(0, element)
        }
    }

    return (
        <>
            <Navbar id="Navbar" style={{ borderBottom: "1px solid grey" }} className="justify-content-between" bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="/" style={{ fontSize: 20 }}>
                        <img
                            alt=""
                            src="/assets/1/group.png"
                            width="20"
                            height="20"
                            className="d-inline-block align-center"
                        />{' '}
                        PlayCrowd
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{ padding: 10 }} className="me-auto">
                            <Nav.Link>
                                <span onClick={() => goToCampaign()} className="nav-link">
                                    ดูแคมเปญ
                                </span>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/whatisplaycrowd" className="nav-link">
                                    อะไรคือ PlayCrowd?
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/contact" className="nav-link">
                                    ติดต่อเรา
                                </Link>
                            </Nav.Link>
                        </Nav>
                        <Nav style={{ padding: 10 }} className="mr-auto">
                            {currentUser ? <Nav.Link><Link to="/profile" className="nav-link">จัดการบัญชี</Link></Nav.Link> : <Nav.Link><Link to="/login" className="nav-link">เข้าสู่ระบบ</Link></Nav.Link>}
                            <Link style={{ marginTop: 8 }} to="#">
                                <Button style={{ border: "1px solid black" }} onClick={() => alert("รบกวนติดต่อมาที่เพจ Playcrowd ครับ")} variant="light">สร้างแคมเปญ</Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarT;