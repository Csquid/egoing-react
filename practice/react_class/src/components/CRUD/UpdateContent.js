import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: props.title,
            desc: props.desc,
            id: props.id
        }
    }   
    render() {
        console.log('>> render update');
        return (
            <div className="content">
                <form className="floating-box" action="/create/update" onSubmit={(e) => {
                    e.preventDefault();
                    
                    this.props.onUpdate({
                        title: e.target.title.value, 
                        desc: e.target.desc.value,
                        id: Number(e.target.id.value)
                    });

                    e.target.title.value = '';
                    e.target.desc.value = '';
                }}>
                    <p>
                        <input name="id" style={{display: 'none'}} defaultValue={this.state.id} readOnly></input>
                    </p>
                    <p>
                        <input className="input" type="text" name="title" placeholder="title" autoComplete="off" defaultValue={this.state.title}></input>
                    </p>
                    <p>
                        <textarea className="textarea" name="desc" placeholder="description" defaultValue={this.state.desc}></textarea>
                    </p>
                    <p>
                        <input className="submit" type="submit"></input>
                    </p>
                </form>
            </div>
        );
    }
}

export default UpdateContent;