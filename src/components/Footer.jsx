import { Container, Navbar, NavLink } from "react-bootstrap"
import { BsGithub } from "react-icons/bs"
const Footer = () => {
  return (
    <Navbar className="d-flex justify-content-center py-2 ">
      <NavLink href="https://github.com/danranges">
        <span style={{ fontSize: "0.8rem" }}>Made by</span>
        <BsGithub className="mx-1" />
        <span style={{ fontSize: "0.8rem" }}>Dan Ranges</span>
      </NavLink>
    </Navbar>
  )
}

export default Footer
