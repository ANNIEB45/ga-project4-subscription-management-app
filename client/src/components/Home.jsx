import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    state = {
        categories: [],
    }

    componentDidMount() {
        this.getAllCategories()

    }


    getAllCategories = async () => {

        try {
            const res = await axios.get('/api/v1/category/')
            const newState = { ...this.state }
            newState.categories = res.data
            this.setState(newState)
        } catch (err) {
            console.log('Error getting all categories')
            console.log(err)
        }
    }


    render() {
        const { categories } = this.state
        console.log(categories)
        return (
            <div>
                <h2>Home Page</h2>
                { categories.map((item, i) => {
                    return (
                        <div key={ `${item.i}` }>
                            <h3>{ item.group }</h3>
                            { item.subscriptions.map((subs) => {
                                return (
                                    <div key={ `${subs.id}` }>
                                        {/* if category is free, only print the image and the name */ }
                                        <Link to={`/subscription/${subs.id}`}>
                                        <img src={ subs.image_url } width="100" height="75" />
                                        <div>{ subs.name }</div>
                                        <div>{ subs.due_date }</div>
                                        <div>{ subs.amount }</div>
                                        <div>{ subs.frequency }</div>
                                        </Link>
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
