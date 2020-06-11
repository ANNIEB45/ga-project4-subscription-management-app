import React, { Component } from 'react'
import axios from 'axios'


export default class CreateSubscription extends Component {
    state = {

        newSubscription: {
            name: '',
            due_date: '',
            amount: 0,
            frequency: '',
            image_url: '',
            category_id: this.props.category[0] || ''
        }
    }

    handleOnChange = (evt) => {
        const newState = { ...this.state }
        newState.newSubscription[evt.target.name] = evt.target.value
        this.setState(newState)
        console.log(evt.target.value)
    }

    handleSubmit = async (evt) => {
        evt.preventDefault()
        console.log('i was clicked')
        try {
            await axios.post('/api/v1/subscription/', this.state.newSubscription)
            this.props.getAllCategories()
        } catch (err) {
            console.log('failed to create subscription')
            console.log(err)
        }
    }


    render() {
        const { newSubscription } = this.state
        return (
            <div>
                <form
                    onSubmit={ this.handleSubmit }>
                    <input
                        type='text'
                        name='name'
                        placeholder="Subscription Name"
                        value={ newSubscription.name }
                        onChange={ this.handleOnChange } />
                    <input
                        type='date'
                        name='date'
                        value={ newSubscription.date }
                        onChange={ this.handleOnChange } />
                    <input
                        type='number'
                        name='amount'
                        value={ newSubscription.amount }
                        onChange={ this.handleOnChange } />
                    <input
                        type='text'
                        name='frequency'
                        placeholder="Frequency"
                        value={ newSubscription.frequency }
                        onChange={ this.handleOnChange } />
                    <input
                        type='text'
                        name='image_url'
                        placeholder="Image"
                        value={ newSubscription.image_url }
                        onChange={ this.handleOnChange } />

                    <label>
                        <select
                            name='category_id'
                            value={ newSubscription.category_id }
                            onChange={ this.handleOnChange }>
                            { this.props.category.map((item) => {
                                return (
                                    <option value={ item.id }>{item.group}</option>
                                )
                            }) }

                        </select>
                    </label>

                    <input
                        type="submit"
                        value='Add Subscription' />
                </form>
            </div>
        )
    }
}
