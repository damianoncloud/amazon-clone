import React from 'react'
import { Link } from 'react-router-dom';
import amazonLogo from './amazon-logo-copia.png';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to='/'>
                <img 
                    className="header__logo" 
                    src={amazonLogo}
                    alt="Amazon logo" />
            </Link>
            {/* Search box */} 
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            
            {/* 3 Links */}

             <div className="header_nav">
                 {/* 1st Link */}
                    <Link to='/login' className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Hello Qazi</span>
                            <span className="header__optionLineTwo">Sign In</span>
                        </div>
                    </Link>
                 {/* 2nd Link */}
                    <Link to='/' className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">& Orders</span>
                        </div>
                    </Link>
                 {/* 3rd Link */}
                    <Link to='/' className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Your</span>
                            <span className="header__optionLineTwo">Prime</span>
                        </div>
                    </Link>
                 {/* 4th Link */}
                    <Link to='/checkout' className="header__link">
                        <div className="header__optionBasket">
                            {/* Shopping Basket Icon */}
                            <ShoppingBasketIcon />
                            {/* Number of items in the basket */}
                            <span className="header__optionLineTwo header__basketCount">0</span>
                        </div>
                    </Link>
             </div>
            {/* Basket icon with number */} 

        </nav>
    )
}

export default Header