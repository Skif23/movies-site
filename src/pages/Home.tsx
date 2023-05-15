import {NavLink} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
    </div>
  );
};

export default Home;
