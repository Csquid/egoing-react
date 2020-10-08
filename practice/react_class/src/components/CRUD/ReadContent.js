import React, { Component } from 'react';

class ReadContent extends Component {
    // shouldComponentUpdate(newProps, newState) {
    //     if(newProps.title === this.props.title) {
    //         return false;
    //     }
    //     return true;
    // }
    render() {
        console.log('>> render read');
        
        return (
            <div className="content">
                <article className="floating-box">
                    <h2> {this.props.title} </h2>
                    {this.props.desc}
                </article>
            </div>
        );
    }
}

export default ReadContent;