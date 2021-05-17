import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const activeStyle = {
    fontWeight: "bold",
    fontSize: "1.5rem"
  }

  return (
    <nav className="glass">
      <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
      <NavLink to="/liked" activeStyle={activeStyle}>Liked Albums</NavLink>
    </nav>
  )
}

export default Navigation;