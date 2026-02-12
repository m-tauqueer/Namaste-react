
import { LOGO_URL } from "../utlis/constants";

const Header = () => {
 return (
    <div className="header">
    <div className="logo-container">

        <img src={LOGO_URL} alt="FoodDash Logo" className="logo" />
    </div>
  

    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
  </div>
 )
};


export default Header;