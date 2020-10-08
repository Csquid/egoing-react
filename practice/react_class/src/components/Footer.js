import React, { Component } from 'react';

class Footer extends Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        console.log('>> render footer');
        
        return (
            <footer>
                producer. jjy-codemonkey
            </footer>
        );
    }
}

export default Footer;