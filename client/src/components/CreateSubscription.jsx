import React, { Component } from 'react'
import axios from 'axios'


export default class CreateSubscription extends Component {
    state = {
        newSubscription: {
            name: '',
            due_date: Date,
            amount: 0,
            frequency: '',
            image_url: '',
        }
    }


    render() {
        const { newSubscription } = this.state
        return (
            <div>
                <form>
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
                </form>
            </div>
        )
    }
}
