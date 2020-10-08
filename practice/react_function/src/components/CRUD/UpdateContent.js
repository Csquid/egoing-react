import React, {useState} from 'react'

function UpdateContent(props) {
    console.log(props);
    const [id] = useState(props.id);
    const [title] = useState(props.title);
    const [desc] = useState(props.desc);

    console.log('>> render update');
        return (
            <div className="content">
                <form className="floating-box" action="/create/update" onSubmit={(e) => {
                    e.preventDefault();
                    
                    props.onUpdate({
                        title: e.target.title.value, 
                        desc: e.target.desc.value,
                        id: Number(e.target.id.value)
                    });

                }}>
                    <p style={{margin: 0}}>
                        <input name="id" style={{display: 'none'}} defaultValue={id} readOnly></input>
                    </p>
                    <p>
                        <input className="input" type="text" name="title" placeholder="title" autoComplete="off" defaultValue={title}></input>
                    </p>
                    <p>
                        <textarea className="textarea" name="desc" placeholder="description" defaultValue={desc}></textarea>
                    </p>
                    <p>
                        <input className="submit" type="submit"></input>
                    </p>
                </form>
            </div>
        );
}

export default UpdateContent
