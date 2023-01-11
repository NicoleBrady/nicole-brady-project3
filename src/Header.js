
import {Link} from 'react-scroll';
import wallet from './wallet.png';

function Header() {
    return (
        <header>
          <div className = "flexHeader wrapper">
            <h2>What Would You Buy?</h2>
            <div className = 'headerImg'>
            <img src={wallet} alt="graphic of wallet with money" />
            </div>
          </div>
          <div className = "headerIcon">
            <a href=""><Link to="main" smooth={true} activeClass="active" spy={true}><i className="fas fa-chevron-down"></i></Link></a>
          </div>  
        </header>
    )
}

export default Header;