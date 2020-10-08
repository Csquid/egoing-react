import React from 'react'

function ControlCRUD(props) {
    console.log('>>> Control CRUD');
    let crud_list = []
    let crud_data = ['create', 'update', 'delete'];

    for (let i = 0; i < crud_data.length; i++) {
        crud_list.push(
            <a key={i}
                href={"/CRUD/" + crud_data[i]}
                onClick={(e) => {
                    e.preventDefault();
                    
                    props.onChangeMode(crud_data[i]);
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
    )
}

React.memo(ControlCRUD, (props, newProps) => {
    console.log('new props', newProps);
    console.log('old props', props);

    if(props.title === newProps.title) {
        return false;
    }
    return true;
});

export default ControlCRUD
