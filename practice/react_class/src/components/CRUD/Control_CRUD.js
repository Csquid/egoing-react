import React, { Component } from 'react';

class ControlCRUD extends Component {
    shouldComponentUpdate(newProps, newState) {
        return false;
    }
    
    render() {
        console.log('>>> render control crud');

        let crud_list = []
        let crud_data = ['create', 'update', 'delete'];

        for (let i = 0; i < crud_data.length; i++) {
            crud_list.push(
                <a key={i}
                    href={"/CRUD/" + crud_data[i]}
                    onClick={(e) => {
                        e.preventDefault();
                        this.props.onChangeMode(crud_data[i]);
                    }}
                >
                    {crud_data[i]}
                </a>
            )
        }

        return (
            <div>
                {crud_list}
            </div>
        );
    }
}

export default ControlCRUD;