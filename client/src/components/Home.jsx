import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
    state = {
        subscriptions: []
    }

    componentDidMount() {
        this.getAllSubscriptions()
    }

    getAllSubscriptions = async () => {
        try {
            const res = await axios.get('/api/v1/subscription/')
            const newState = { ...this.state }
            newState.subscription = res.data
            this.setState(newState)
        } catch (err) {
            console.log('Error getting all subscriptions')
            console.log(err)
        }
    }

    render() {
        const { subscriptions } = this.state
        // console.log(subscriptions)
        return (
            <div>
                <h2>Home Page</h2>
                { subscriptions.map((item) => {
                    return (
                        <div>
                            <img src={item.image_url} />
                            <div> Name: { item.name }</div>
                            <div>{ item.due_date }</div>
                            <div>{ item.amount }</div>
                            <div>{ item.frequency }</div>
                        </div>
                    )
                }) }

            </div>
        )
    }
}
