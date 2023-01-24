import React, { Component } from "react";
import "./todoApp.css";
import { FaRegTimesCircle } from 'react-icons/fa';


export default class todoApp extends Component {
    state = { todolist: [], string: "" };
    savetodo = (e) => {
        this.setState({ string: e.target.value });
    };
    todoarray = () => {
        this.setState({
            todolist: [...this.state.todolist, { data: this.state.string, isdone: false }],
            string: "",
        });
    };
    completed = (index) => {
        let newData = [...this.state.todolist];
        newData[index].isdone = !newData[index].isdone;
        this.setState({
            todolist: newData,
        });
    };
    deleteItem = (index) => {
        const newList = [...this.state.todolist];
        newList.splice(index, 1);
        this.setState({
            todolist: newList,
        });
    };
    render() {
        return (
            <div className="main">
                    <h1>What would you like to do?</h1>

                <div class="ui right labeled left icon input">
                    <input onChange={this.savetodo} type="text" placeholder="Enter Your To Do" value={this.state.string}></input>
                    <button onClick={this.todoarray} disabled={this.state.string.length === 0} style={{ marginLeft: 25 }}>
                        Add
                    </button>
                </div>
                <ol className="list">
                    {this.state.todolist.map((row, index) => (
                        <li>
                            <div className="listItem">
                                <div>
                                    {!row.isdone ? row.data : <del>{row.data}</del>}
                                </div>
                                <div>
                                    {row.isdone ? (
                                        <a> 
                                            <i  onClick={() => this.deleteItem(index)} ><FaRegTimesCircle /></i>
                                        </a>
                                    ) : null}

                                    <a onClick={() => this.completed(index)} style={{ marginLeft: 25 }}>
                                            
                                        <img style={{ height: 15}} src={row.isdone?"https://img.icons8.com/ios/50/null/ok--v4.png":"https://img.icons8.com/ios/50/null/ok--v2.png" }/>
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}
