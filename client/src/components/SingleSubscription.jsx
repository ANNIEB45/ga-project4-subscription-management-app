
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

import './SingleSubscription.css'


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

    // onUpdate = async () => {
    //     const subsId = this.props.match.params.subscriptionId
    //     console.log('i\'ve been updated')
    //     try {
    //         await axios.put(`/api/v1/subscription/${subsId}`, this.state)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    render() {
        return (
            <div className='single-container'>
            <Link to='/'>Home</Link>

                {/* <button onClick={ () => this.onUpdate() }>Update</button> */ }
                <div className='item-container'>
                    <div>
                        <img src={ this.state.image_url } width="400" height="250" />
                    </div>
                    <div className='item-wrapper'>
                        <div>{ this.state.name }</div>
                        <div>Frequency:{ this.state.frequency }</div>
                        <div>Due:{ this.state.due_date }</div>
                        <div>Amt:{ this.state.amount }</div>
                    </div>
                </div>
                <div className='history-heading'>
                    <h1>History</h1>
                    <h3>Total: ${ this.getTotalPayment() }</h3>
                </div>
                <div>{ this.state.records.map((item, index) => {
                    return (

                        <div className='history-wrapper' key={ `2b4kpf${index}` }>
                            <div>Date: { item.date }</div>
                            <div>Amount: ${ this.state.amount }</div>
                            <div>Payment Type: { item.payment_type }</div>
                        </div>
                    )
                    
                }) }</div>
                <button onClick={ () => this.onDelete() }>Delete</button>
            </div>
        )
    }
}
