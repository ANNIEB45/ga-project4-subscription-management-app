
import React, { Component } from 'react'
import axios from 'axios'

// name = models.CharField(max_length=250)
//     due_date = models.DateField(auto_now_add=True)
//     amount = models.DecimalField(max_digits=5, decimal_places=2)
//     frequency = models.CharField(max_length=250)
//     image_url = models.TextField(blank=True)

export default class SingleSubscription extends Component {
    state = {
        name: '',
        due_date: Date,
        amount: 0,
        frequency: '',
        image_url: '',
        records: []
    }

    componentDidMount() {
        this.getSingleSubscription()
        // this.getHistory()
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

    // getHistory = async() => {
    //     try {
    //         const historyId = this.props.match.params.subscriptionId
    //         const res = await axios.get(`/api/v1/history/${historyId}/`)
    //         this.setState(res.data)
    //         console.log(res.data)
            
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // how to load history for subscription
    render() {
        return (
            <div>
                <div>
                    <img src={ this.state.image_url } width="400" height="250" />
                </div>
                <div>{ this.state.name }</div>
                <div>{ this.state.frequency }</div>
                <div>{ this.state.due_date }</div>
                <div>{ this.state.amount }</div>
                
                <h1>History</h1>
                <div>{ this.state.records.map((item) => {
                    return (
                        
                        <div>
                            { item.date }
                            {this.state.amount}
                            { item.payment_type }
                            {item.total_amt}
                        </div>
                    )
                }) }</div>
                <button>Delete</button>
               
            </div>
        )
    }
}
