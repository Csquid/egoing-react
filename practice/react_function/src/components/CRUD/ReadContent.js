import React from 'react'

function ReadContent(props) {
    console.log('>> read')

    return (
        <div className="content">
            <article className="floating-box">
                <h2> {props.title} </h2>
                {props.desc}
            </article>
        </div>
    )
}

// React.memo(ReadContent, (props, newProps) => {
//     console.log('new props', newProps);
//     console.log('old props', props);

//     if(props.title === newProps.title) {
//         return false;
//     }
//     return true;
// })

export default ReadContent