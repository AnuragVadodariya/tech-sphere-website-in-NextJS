import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="w-100 mt-2">
      <Link href="/">
        <>
          <Image
            className="mx-2"
            src="/logo.png"
            width={130}
            height={80}
            alt="company-logo"
          />
          <Navbar.Brand>Tech Sphere Software</Navbar.Brand>
        </>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/">
            <Nav.Link href="/">Home</Nav.Link>
          </Link>
          <Link href="/about">
            <Nav.Link href="/about">About</Nav.Link>
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
