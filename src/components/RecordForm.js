import React, { Component } from 'react';
import * as RecordsAPI from '../utils/RecordsAPI'
class RecordForm extends Component {
    constructor(props){
        super(props)
        this.state={
            date:'',
            title:'',
            amount:''
        }
    }
    //input change 事件
    handleChane(event){
        let name,obj;
        name=event.target.name;
        this.setState((
            obj={},
            obj[""+name]=event.target.value,
            obj
        ))
    }
    // 提交
    handleSubmit(event){
        const data = {
            date: this.state.date,
            title:this.state.title,
            amount:Number.parseInt(this.state.amount,0)
        }
        event.preventDefault();
        RecordsAPI.create(data).then(
            response => {
                this.props.handleNewRecord(response.data)
                this.setState({
                    date:'',
                    title:'',
                    amount:''
                })
            }
        ).catch(
            error => console.log(error.message)
        )

    }
    // 验证
    valid() {
        return this.state.date && this.state.title && this.state.amount
    }
  render() {
    return (
       <form className="form-inline mb-3" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group mr-2">
            <input type="text" className="form-control" placeholder="Date"  onChange={this.handleChane.bind(this)} name="date" value={this.state.date}/>
        </div>
        <div className="form-group mr-2">
            <input type="text" className="form-control" placeholder="Title" onChange={this.handleChane.bind(this)} name="title" value={this.state.title}/>
        </div>
        <div className="form-group mr-2">
            <input type="text" className="form-control" placeholder="Amount" onChange={this.handleChane.bind(this)} name="amount" value={this.state.amount}/>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.valid()}>Create Records</button>
       </form>
    );
  }
}

export default RecordForm;

