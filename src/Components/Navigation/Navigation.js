import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import './Navigation.css';

const Navigation = ({ isMobile }) => {
  const activeStyle = {
    fontWeight: "bold",
    fontSize: "1.5rem"
  }

  const determineMobile = () => {
    if (!isMobile) {
      return (
        <>
        <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
        <NavLink to="/liked" activeStyle={activeStyle}>Liked Albums</NavLink>
        </>
      )
    }

    if (isMobile) {
      return (
        <details>
          <summary>
            <MenuIcon />
          </summary>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          <NavLink to="/liked" activeStyle={activeStyle}>Liked Albums</NavLink>
        </details>
      )
    }
  }

  return (
    <nav className={isMobile ? "nav__mobile_view glass" : "nav__web_view glass"}>
      { determineMobile() }
    </nav>
  )
}

export default Navigation;