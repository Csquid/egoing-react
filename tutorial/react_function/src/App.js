import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [funcShow, setFuncShow] = useState(true);
    const [classShow, setClassShow] = useState(true);
    const customButtonStyle = {
        margin: '10px 0px',
        width: '100px',
        height: '30px'
    }

    return (
        <div className="container">
            Hello World! <br />
            <button style={customButtonStyle}
                    onClick={()=> {
                        setFuncShow(!funcShow);
                    }}
            >Function</button> <br />

            <button style={customButtonStyle}
                    onClick={()=> {
                        setClassShow(!classShow);
                    }}
            >Class</button>
            {funcShow ? <FuncComp initNumber={2}></FuncComp> : null }
            {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
        </div>
    );
}

let cssStyle = {
    class: "color: red",
    function: "color: blue"
}
let funcID = 0;

function FuncComp(props) {
    const [number, setNumber] = useState(props.initNumber);
    const [_date, setDate] = useState((new Date()).toUTCString());

    useEffect(function() {
        console.log('%cfunc => useEffect (componentDidMount) ' + (++funcID), cssStyle.function);

        return function() {
            console.log('%cfunc => useEffect return (componentWillUnMount) ' + (++funcID), cssStyle.function);
        }
    }, []);

    //side effect: 부가적인
    useEffect(function() {
        console.log('%cfunc => useEffect number (componentDidMount & componentDidUpdate) ' + (++funcID), cssStyle.function);
        document.title = number;

        return function() {
            console.log('%cfunc => useEffect number return (componentDidMount & componentDidUpdate) ' + (++funcID), cssStyle.function);
        }
    }, [number]);

    useEffect(function() {
        console.log('%cfunc => useEffect _date (componentDidMount & componentDidUpdate) ' + (++funcID), cssStyle.function);
        document.title = _date;

        return function() {
            console.log('%cfunc => useEffect _date return (componentDidMount & componentDidUpdate) ' + (++funcID), cssStyle.function);
        }
    }, [_date]);

    console.log('%cfunc => render ' + (++funcID), cssStyle.function);

    //main effect
    return (
        <div className="container">
            <h2>function style component</h2>
            <p>Number: {number} </p>
            <p>Date: {_date} </p>
            <input type="button" value="Random" onClick={() => {
                setNumber(Math.random());
            }}>
            </input>
            <input type="button" value="Date" onClick={() => {
                let today = new Date();
                setDate(today.toUTCString());
            }}>
            </input>
        </div>
    );
}

class ClassComp extends React.Component {
    constructor(props) {
        super(props);
        
        console.log('%cconstructor', cssStyle.class);

        this.state = {
            number: props.initNumber,
            _date: (new Date()).toUTCString()
        }

    }
    componentDidUpdate() {
        console.log('%cclass => componentDidUpdate', cssStyle.class);
    }
    componentDidMount() {
        console.log('%cclass => componentDidMount', cssStyle.class);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('%cclass => shouldComponentUpdate', cssStyle.class);
        return true;
    }
    componentWillUnmount() {
        console.log('%cclass => componentWillUnmount', cssStyle.class);
    }
    componentWillUpdate
    render() {
        console.log('%cclass => render', cssStyle.class);
        return (
            <div className="container">
                <h2>cssStyle style component</h2>
                <p>Number: {this.state.number}</p>
                <p>Date: {this.state._date}</p>
                <input type="button" value="random" onClick={() => {
                    this.setState({ number: Math.random() });
                }}></input>
                <input type="button" value="Date" onClick={() => {
                    let today = new Date();
                    this.setState({ _date: today.toUTCString() })
                }}>
                </input>
            </div>
        )
    }
}
export default App;
