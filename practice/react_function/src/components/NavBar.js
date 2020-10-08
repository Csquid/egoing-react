import React from 'react'
import ControlCRUD from './CRUD/ControlCRUD';

function NavBar(props) {
    console.log('>> navbar')

    let nav_list = [];
    let data = props.contents;

    for(let i = 0; i < data.length; i++) {
        nav_list.push(
            <li key={data[i].id}>
                <a  href={"/content/" + data[i].title}
                    data-id={data[i].id}
                    onClick={(e) => {
                        e.preventDefault();
                        
                        props.onChangePage(Number(e.target.dataset.id));
                        props.onChangeMode('read');
                    }}
                >
                    {data[i].title}
                </a>
            </li>
        )
    }

    return (
        <nav>
            <ul className="horizontal gray">
                {nav_list}
                <div className="dropdown">
                    <button className="dropbtn"> CRUD </button>
                    <div className="dropdown-content">
                        <ControlCRUD onChangeMode={(mode) => {
                            if (mode === 'delete') {
                                props.onDeleteData();
                            } else {
                                props.onChangeMode(mode);
                            }
                        }}></ControlCRUD>
                    </div>
                </div>
            </ul>

        </nav>
    )
}

export default NavBar;