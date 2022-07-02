import { Link } from "react-router-dom";
import '../../app.css';

const Menu = () => {
  return (
    <div>
      <Link to="/">Main page</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact me</Link>
    </div>
  );
};

export default Menu
