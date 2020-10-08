import React, { Component } from 'react';

class Header extends Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        console.log('>> render header');
        return (
            <div id="header-title">
                <h1><a id="main-title" href="/" onClick={(e) => {
                    e.preventDefault();
                    this.props.onChangePage();
                    console.log(e);
                }}>Code-God</a></h1>
            </div>
        );
    }
}

export default Header;