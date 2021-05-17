import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

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
        <button>
          <MenuIcon />
        </button>
      )
    }
  }

  return (
    <nav className="glass">
      { determineMobile() }
    </nav>
  )
}

export default Navigation;