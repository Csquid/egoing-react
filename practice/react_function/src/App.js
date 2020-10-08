import React, { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ReadContent from './components/CRUD/ReadContent';
import CreateContent from './components/CRUD/CreateContent';
import UpdateContent from './components/CRUD/UpdateContent'
import Footer from './components/Footer';

function FindContentIndex(inquireData, seleted_id) {
    for(let i = 0; i < inquireData.length; i++) {
        if(inquireData[i].id === seleted_id) {
            return i;
        }
    }
}

function App() {
    console.log('> app');
    const [selected_id, setSelected_id] = useState(0);
    const [intro] = useState({title: 'Hello', desc: 'Welcome My Homepage'});
    const [contents, setContent] = useState([
        { id: 1, title: 'Home', desc: 'Show Isaac Item' },
        { id: 2, title: 'News', desc: 'Show Red Color Isaac Items' },
        { id: 3, title: 'Content', desc: 'Show Blue Color Isaac Items' },
        { id: 4, title: 'Really', desc: 'I Want Delete datas' }
    ]);
    let contentLastIndex = contents.length;
    const [mode, setMode] = useState('welcome');
    let _title, _desc, _id = null;
    let bodyContent = null;

    if(mode === 'welcome') {
        _title = intro.title;
        _desc = intro.desc;
    } else if(mode === 'read' || mode === 'update') {
        let data = contents;
        let contentIndex = FindContentIndex(contents, selected_id);

        _title = data[contentIndex].title;
        _desc = data[contentIndex].desc;
        _id = data[contentIndex].id;
    }

    switch (mode) {
        case 'welcome':
        case 'read':
            bodyContent = <ReadContent title = {_title} desc = {_desc} _id = {_id}></ReadContent>
            break;
        case 'create':
            bodyContent = 
            <CreateContent 
                onCreate={(nData) => {
                    let tempData = Array.from(contents);
                
                    tempData.push({
                        id: ++contentLastIndex,
                        title: nData.title,
                        desc: nData.desc
                    });

                    setContent(tempData);
                    setMode('read');
                    setSelected_id(contentLastIndex);
                }}
            ></CreateContent>
            break;
        case 'update':
            bodyContent =
            <UpdateContent 
                id={_id}
                title={_title} 
                desc={_desc} 
                onUpdate={(changedData) => {
                    let data = Array.from(contents);
                    let contentIndex = FindContentIndex(contents, selected_id); 

                    data[contentIndex] = changedData;

                    setContent(data);
                    setMode('read');
                    setSelected_id(changedData.id);
                    // data
                }}
            >
            </UpdateContent>
            break;
        default:
            break;
    }
    return (
        <div className="App">
            <Header></Header>
            <NavBar
                contents = { contents }
                onChangePage = {(_id) => {
                    setMode('read');
                    setSelected_id(_id);
                }}
                onChangeMode = {(_mode) => {
                    setMode(_mode);
                }}
                onDeleteData = {() => {
                    if(window.confirm('Really Want Delete?')) {
                        let data = Array.from(contents);
                        let contentIndex = FindContentIndex(contents, selected_id); 
                        
                        data.splice(contentIndex, 1);
                        
                        setContent(data);
                        setMode('welcome');
                    } else {
                        setMode('read');                    
                    }
                }}
            ></NavBar>
            {bodyContent}
            <Footer></Footer>
        </div>
    );
}

export default App;
