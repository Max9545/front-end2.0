import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/liked">Liked Albums</NavLink>
    </nav>
  )
}

export default Navigation;