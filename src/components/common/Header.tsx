import { FacebookFilled, InstagramFilled, MailOutlined, PhoneOutlined, TwitterSquareFilled, UserOutlined } from "@ant-design/icons"

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
        </div>
    )
}

export default AppHeader