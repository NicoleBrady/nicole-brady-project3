
import {Link} from 'react-scroll';

function Header() {
    return (
      // This header is supposed to be incorporated with my stretch goals and to explain the purpose of the project...will get to stretch goals later
        <header>
          <div className = "flexHeader wrapper">
            <h2>What Would You Buy?</h2>
            <div className = 'introText'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
          </div>
          <div className = "headerIcon">
            <a href=""><Link to="main" smooth={true} activeClass="active" spy={true}><i className="fas fa-chevron-down"></i></Link></a>
          </div>  
        </header>
    )
}

export default Header;