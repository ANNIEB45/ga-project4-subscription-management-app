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
            category: []
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
                    
                    <label>
                        Choose a Category:
                        <select
                            multiple={true}
                            name='category'
                            value={ [newSubscription.category] }
                            // passing an array in the value attribute since we set multiple to true
                            onChange={ this.handleOnChange }>
                            { this.props.category.map((item,index) => {
                                return (
                                    <option  key={ `4brl${index}` } value={ item.id } >{item.group}</option>
                                )
                            }) }
                        </select>
                    </label>

                    <input
                        type='text'
                        name='name'
                        placeholder="Subscription Name"
                        value={ newSubscription.name }
                        onChange={ this.handleOnChange } />
                    
                    <input
                        type='date'
                        name='due_date'
                        value={ newSubscription.due_date }
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

                

                    <input
                        type="submit"
                        value='Add Subscription' />
                </form>
            </div>
        )
    }
}
