import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <header className="header-component" data-test="header-component">
            <div className="header-container">
                <div className="header-logo" data-test="header-logo">
                    <h1>Logo</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;