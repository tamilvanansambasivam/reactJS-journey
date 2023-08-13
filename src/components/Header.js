import { LOGO_URL } from "./utilities/constant";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">

            <div className="logo-container">
                <img className="logo"
                    src = {LOGO_URL} />
            </div>

            <div className="nav-items ">
                <ul>
                    <Link to="/"><li>home</li></Link>
                    <Link to="/about"><li>about</li></Link>
                    <Link to="/contact"><li>contact </li></Link>
                    <Link to="/cart"><li>cart</li></Link>

                </ul>
            </div>

        </div>
    )
}

export default Header;