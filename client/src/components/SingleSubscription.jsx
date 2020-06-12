
import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


export default class SingleSubscription extends Component {
    state = {
        name: '',
        due_date: Date,
        amount: 0,
        frequency: '',
        image_url: '',
        records: [],
        redirect: false
    }

    componentDidMount() {
        this.getSingleSubscription()
    }

    getSingleSubscription = async () => {
        try {
            const subsId = this.props.match.params.subscriptionId
            const res = await axios.get(`/api/v1/subscription/${subsId}/`)
            console.log(res.data)
            this.setState(res.data)
        } catch (err) {
            console.log('Failed to get single Subscription')
            console.log(err)
        }
    }

    getTotalPayment = () => {
        let sum = 0
        this.state.records.forEach((item) => {
            sum += parseFloat(item.total_amt)
        })
        return sum
    } 
   
    onDelete = async () => {
        const subsId = this.props.match.params.subscriptionId
        console.log('I am deleting')
        try {
            await axios.delete(`/api/v1/subscription/${subsId}/`)
            this.props.history.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <button onClick={ () => this.onDelete()}>Delete</button>
                <button>Update</button>
                <div>
                    <img src={ this.state.image_url } width="400" height="250" />
                </div>
                <div>{ this.state.name }</div>
                <div>{ this.state.frequency }</div>
                <div>{ this.state.due_date }</div>
                <div>{ this.state.amount }</div>

                <h1>History</h1>
                <div>Total: { this.getTotalPayment() }</div>
                <div>{ this.state.records.map((item, index) => {
                    return (

                        <div key={`2b4kpf${index}`}>
                            <div>{ item.date }</div>
                            <div>{ this.state.amount }</div>
                            <div>{ item.payment_type }</div>
                        </div>
                    )
                }) }</div>

            </div>
        )
    }
}
