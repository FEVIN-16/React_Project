import React, { Component } from 'react';
import Form from './Form';
import Table from './Table';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            gender: '',
            list: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: [value] }, () => { console.log(this.state.name, this.state.age, this.state.gender) });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name == 0 || this.state.age == 0 || this.state.gender == 0) {
            alert("Please Enter All Details");
        } else if (this.state.age > 18) {
            let list = [...this.state.list];
            list.push({
                name: this.state.name,
                age: this.state.age,
                gender: this.state.gender,
            })
            this.setState({ list: list });
            this.setState({
                name: '',
                age: '',
                gender: '',
            })
        }else{
            alert("Persons age sholue be above 18");
        }

    }
    render() {
        return (
            <div>
                
                <Form name={this.state.name} age={this.state.age}
                    gender={this.state.gender} handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} />
                <Table list={this.state.list} />
            </div>
        )
    }
}
export default Container;