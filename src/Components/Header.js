import React from 'react';

const Header = () => {
    return (
    <header>
        <div id="header">
            <a className="header-link" href="#articles">Articles</a>
            <a className="header-link" href="#nonfiction">Nonfiction</a>
            <a className="header-link" href="#fiction">Fiction</a>
        </div>
    </header>
    );
}

export default Header;