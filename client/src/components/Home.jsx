import React, { Component } from 'react'
import axios from 'axios'
import CreateSubscription from './CreateSubscription'
import { Link } from 'react-router-dom'
import moment from 'moment'

import './Home.css'

export default class Home extends Component {
    state = {
        categories: []
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
    //WORKS



    render() {
        const { categories } = this.state

        return (
            <div className='home-container'>
                <h2>Manag'Em</h2>
                {/* <button>Add Subscription</button> */ }
                <CreateSubscription
                    getAllCategories={ this.getAllCategories }
                    category={ this.state.categories } />
                { categories.map((item, index) => {
                    return (
                        <div key={ `23rpn${index}` } className='subs-container'>

                            <h3 className='group-title'>{ item.group }</h3>
                            
                            { item.subscriptions.map((subs, index) => {
                                return (
                                    <div className='subs-wrappper' key={ `rlbsfs3${index}` }>

                                        <Link to={ `/subscription/${subs.id}` }>
                                            <div className='subs-item-container'>
                                                <img src={ subs.image_url } width="100" height="75" />
                                                <div className='sub-name'>{ subs.name }</div>
                                                {/* if group is paid, show date/amt,freq..if free show only name and img */ }
                                                { item.group === 'paid' ?
                                                    <div className='subs-paid-container'>
                                                        {/* moment(event.date).format('ll') */}
                                                        <div>{ moment(subs.due_date).format('ll') }</div>
                                                        <div>{ subs.amount }</div>
                                                        <div>{ subs.frequency }</div>
                                                    </div> : null }
                                            </div>
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
