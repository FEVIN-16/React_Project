import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class TableForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            type: '',
            details: [],
            data:[],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res},()=>{console.log(this.state.data)})
        },() => {alert("error");})
    }
    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: [value] });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let items = [...this.state.details];
        items.push({
            name: this.state.name,
            price: this.state.price,
            type: this.state.type
        })
        this.setState({ details: items }, () => console.log(this.state.details));
        this.setState({
            name: '', price: '', type: ''
        })
    }
    render() {

        return (
            <div>
                <Form name={this.state.name} price={this.state.price} 
                type={this.state.type} handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit} />
                <Table items={this.state.details} data={this.state.data}/>
            </div>
        )
    }
}
export default TableForm;