import { FacebookFilled, InstagramFilled, MailOutlined, PhoneOutlined, TwitterSquareFilled, UserOutlined } from "@ant-design/icons"
import { NavLink } from "react-router-dom"

const AppHeader: React.FC = () => {
    return (
        <div className="container">
            {/* Top bar */}
            <div className="topBar">
                <div className="contactInfo">
                    <ul>
                        <li><a href="tel:0349990181"><span><PhoneOutlined />0349990181</span></a></li>
                        <li><a href="mailto:contact@support.co.uk "><span><MailOutlined />contact@support.co.uk</span></a></li>
                    </ul>
                </div>


                <div className="otherInfo">
                    <ul className="socialMedia">
                        <li><a href="https://www.facebook.com"><FacebookFilled /></a></li>
                        <li><a href="https://www.tweeter.com"><TwitterSquareFilled /></a></li>
                        <li><a href="https://www.instagram.com"><InstagramFilled /></a></li>
                    </ul>

                    <button><UserOutlined /> My Account</button>
                </div>
            </div>
            <div className="header seperator">
                <div className="logo">Grocery</div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/shop'>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to='/faq'>FAQ</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default AppHeader