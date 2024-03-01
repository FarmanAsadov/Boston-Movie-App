import { Link } from "react-router-dom"
import  "./header.css"

const Header = ({logo, title, subTitle}) => {
    return (
            <div className="header">
                <div className="left">
                    <img className="left-logo" src={logo} alt="logo" />
                    <div className="info">
                    <h4>{title}</h4>
                    <p>{subTitle}</p>
                    </div>
                </div>
                <div className="right">
                    <Link to="/">Home</Link>
                    <Link to="/now_playing">Now Playing</Link> 
                </div>
            </div>
    )

}

export default Header;
