import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ReadContent from './components/CRUD/ReadContent';
import CreateContent from './components/CRUD/CreateContent';
import UpdateContent from './components/CRUD/UpdateContent';
import Footer from './components/Footer'

// inquireData: 데이터를 조회하다
function FindContentIndex(inquireData, seleted_id) {
    for(let i = 0; i < inquireData.length; i++) {
        if(inquireData[i].id === seleted_id) {
            return i;
        }
    }
}
class App extends Component {
    constructor(props) {
        super(props);

        this.max_length = 4;
        this.state = {
            mode: 'welcome',
            seleted_id: 0,
            intro: { title: 'welcome', desc: 'Welcome My Homepage' },
            content: [
                { id: 1, title: 'Home', desc: 'Show Isaac Item' },
                { id: 2, title: 'News', desc: 'Show Red Color Isaac Items' },
                { id: 3, title: 'Contact', desc: 'Show Blue Color Isaac Items' },
                { id: 4, title: 'Really', desc: 'I Want Delete datas'}
            ]
        }

    }
    render() {
        console.log('> render app');

        let _title, _desc, _id = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.intro.title;
            _desc = this.state.intro.desc;
        } else if (this.state.mode === 'read' || this.state.mode === 'update') {
            let data = this.state.content;

            let contentIndex = FindContentIndex(this.state.content, this.state.seleted_id);
            
            _title = data[contentIndex].title;
            _desc = data[contentIndex].desc;
            _id = data[contentIndex].id;

        }
        let content = null
        switch (this.state.mode) {
            case 'welcome':
            case 'read':
                content = <ReadContent title={_title} desc={_desc}></ReadContent>;
                break;
            case 'create': 
                content = <CreateContent onCreate={(data) => {
                    let tempContent = this.state.content.concat({
                        id: ++this.max_length,
                        title: data.title,
                        desc: data.desc
                    });

                    this.setState({
                        content: tempContent,
                        mode: 'read',
                        seleted_id: this.max_length
                    })
                    console.log(data);

                }}></CreateContent>;
                break;
            case 'update':
                content = <UpdateContent 
                    title={_title} 
                    desc={_desc}
                    id={_id}
                    onUpdate={(_data) => {
                        //매우 중요함
                        //tihs is very important
                        let nData = Array.from(this.state.content);
                        let contentIndex = FindContentIndex(this.state.content, this.state.seleted_id);

                        nData[contentIndex] = _data;

                        this.setState({
                            content: nData,
                            mode: 'read',
                            seleted_id: _data.id
                        });
                    }}
                    >

                </UpdateContent>
                break;
            default:
                break;
        }

        return (
            <div className="App">
                <Header onChangePage={() => {
                    this.setState({
                        mode: 'welcome'
                    })
                }}></Header>

                <NavBar contents = {this.state.content}
                        seleted_id = {this.state.seleted_id}
                        onChangePage = {(id) => {
                            this.setState({
                                mode: 'read',
                                seleted_id: id
                            })
                        }}
                    
                        onChangeMode = {(nMode) => {
                            if(nMode !== 'delete') {
                                this.setState({
                                    mode: nMode
                                });
                            }
                        }}
                        
                        onDeleteData = {() => {
                            if(window.confirm('Do you really want to delete it?')) {
                                let nData = Array.from(this.state.content);
                                let contentIndex = FindContentIndex(this.state.content, this.state.seleted_id);
                        
                                nData.splice(contentIndex, 1);
                        
                                this.setState({
                                    content: nData,
                                    mode: 'welcome'
                                })
                        
                            } else {
                                this.setState({
                                    mode: 'read'
                                });
                            }
                        }}
                ></NavBar>
                {content}
                <Footer></Footer>
            </div>
        );
    }
}

export default App;