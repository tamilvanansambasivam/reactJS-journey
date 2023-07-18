import { LOGO_URL } from "./utilities/constant";

const Header = () => {
    return (
        <div className="header">

            <div className="logo-container">
                <img className="logo"
                    src = {LOGO_URL} />
            </div>

            <div className="nav-items ">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact </li>
                    <li>cart</li>


                </ul>
            </div>

        </div>
    )
}

export default Header;