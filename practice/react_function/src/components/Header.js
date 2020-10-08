import React from 'react'

function Header(props) {
    console.log('>> header');
    return (
        <header>
            <h1>
                <a id="main-title" href="/" onClick={(e) => {
                    e.preventDefault();
                    console.log(e);
                }}>Code-God</a>
            </h1>
        </header>
    )
}

export default Header;