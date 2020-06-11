
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
        history: []
    }

    componentDidMount() {
        this.getSingleSubscription()
    }

    getSingleSubscription = async () => {
        try {
            const subsId = this.props.match.params.subscriptionId
            const res = await axios.get(`/api/v1/subscription/${subsId}`)
            console.log('are we getting data')
            console.log(res)
            this.setState(res.data)
        } catch (err) {
            console.log('Failed to get single Subscription')
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
