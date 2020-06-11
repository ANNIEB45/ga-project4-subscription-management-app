import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
    state = {
        categories: [],
        subscriptions: {},
    }

    componentDidMount() {
        this.getAllCategories()

    }


    getAllCategories = async () => {

        try {
            const res = await axios.get('/api/v1/category/')
            const newState = { ...this.state }
            newState.categories = res.data
            newState.subscriptions = res.data.subscriptions
            this.setState(newState)
        } catch (err) {
            console.log('Error getting all subscriptions')
            console.log(err)
        }
    }


    render() {
        const { subscriptions, categories } = this.state

        console.log(categories[0])
        return (
            <div>
                <h2>Home Page</h2>
                { categories.map((item, i) => {
                    return (
                        <div key={ `${item.id}` }>
                            <h3>{ item.group }</h3>
                            { item.subscriptions.map((subs) => {
                                return (
                                    <div>
                                        <img src={ subs.image_url } width="100" height="75" />
                                        <div>{ subs.name }</div>
                                        <div>{ subs.due_date }</div>
                                        <div>{ subs.amount }</div>
                                        <div>{ subs.frequency }</div>
                                    </div>

                                )
                            }) }

                        </div>
                    )
                }) }

            </div>
        )
    }
}
