import React, { Component } from 'react';
import ControlCRUD from './CRUD/Control_CRUD';

class NavBar extends Component {
    shouldComponentUpdate(newProps, newState) {
        //만약 navbar에서 content 데이터가 추가 됬다면 return false 해준다 즉 데이터가 변경 되었다는 뜻
        return newProps.contents !== this.props.contents;
    }

    render() {
        console.log('>> render navbar');

        let nav_list = [];
        let data = this.props.contents;

        for (let i = 0; i < data.length; i++) {
            nav_list.push(
                <li key={data[i].id}>
                    <a href={"/content/" + data[i].title}
                        data-id={data[i].id}
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onChangePage(Number(e.target.dataset.id));
                        }}
                    >
                        {data[i].title}
                    </a>
                </li>);
        }

        return (
            <nav>
                <ul className="horizontal gray">
                    {nav_list}
                    <div className="dropdown">
                        <button className="dropbtn"> CRUD </button>
                        <div className="dropdown-content">
                            <ControlCRUD onChangeMode={(mode) => {
                                if(mode === 'delete') {
                                    this.props.onDeleteData();
                                }
                                this.props.onChangeMode(mode);
                            }}></ControlCRUD>
                        </div>
                    </div>
                </ul>

            </nav>
        );
    }
}

export default NavBar;