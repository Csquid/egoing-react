import React from 'react'

function CreateContent(props) {
    console.log('>> render create');

    return (
        <div className="content">
            <form className="floating-box" action="/create/content" onSubmit={(e) => {
                e.preventDefault();

                props.onCreate({
                    title: e.target.title.value,
                    desc: e.target.desc.value
                });

                e.target.title.value = '';
                e.target.desc.value = '';
            }}>
                <p>
                    <input className="input" type="text" name="title" placeholder="title" autoComplete="off"></input>
                </p>
                <p>
                    <textarea className="textarea" name="desc" placeholder="description"></textarea>
                </p>
                <p>
                    <input className="submit" type="submit"></input>
                </p>
            </form>
        </div>
    );
}

export default CreateContent
