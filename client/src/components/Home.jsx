import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
    state = {
        categories: [],
        subscriptions: [],
    }

    componentDidMount() {
        this.getAllCategories()
        this.getAllSubscriptions()
    }


    getAllCategories = async () => {

        try {
            const res = await axios.get('/api/v1/category/')
            const newState = { ...this.state }
            newState.categories = res.data
            this.setState(newState)
        } catch (err) {
            console.log('Error getting all subscriptions')
            console.log(err)
        }
    }

    getAllSubscriptions = async () => {

        try {
            const res = await axios.get('/api/v1/subscription/')
            const newState = { ...this.state }
            newState.subscriptions = res.data
            this.setState(newState)
        } catch (err) {
            console.log('Error getting all subscriptions')
            console.log(err)
        }
    }

    render() {
        const { subscriptions, categories } = this.state

        console.log(categories)
        return (
            <div>
                <h2>Home Page</h2>
                { categories.map((item) => {
                    return (
                        <div>
                            <h3>{ item.group }</h3>
                            <div>{item.subscriptions}</div>
                            { subscriptions.map((item) =>
                                <div>
                                    <img src={ item.image_url } width="100" height="80" alt="subscription image" />
                                    <div> Name: { item.name }</div>
                                    <div>{ item.due_date }</div>
                                    <div>{ item.amount }</div>
                                    <div>{ item.frequency }</div>
                                </div>
                            ) }
                        </div>
                    )
                }) }

            </div>
        )
    }
}
