
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
        const { records } = this.state
        records.forEach((amt) => {
            sum += amt.total_amt
        })
        return sum
    } //how do i add the amount and add to total element

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
                <div>Total: { this.getTotalPayment() }</div>
                <div>{ this.state.records.map((item) => {
                    return (

                        <div>
                            <div>{ item.date }</div>
                            <div>{ this.state.amount }</div>
                            <div>{ item.payment_type }</div>
                        </div>
                    )
                }) }</div>
                <button>Delete</button>

            </div>
        )
    }
}
