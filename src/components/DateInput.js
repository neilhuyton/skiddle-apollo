import React, { Component, Fragment } from 'react'

import Button from 'material-ui/Button';

class DateInput extends Component {    
    state = {
        date: '',
    }

    render() {
        const { onDateChange } = this.props

        return (
            <Fragment>
                <input
                    type="text"
                    onChange={e => this.setState({ date: e.target.value })}
                />
                <Button onClick={() => onDateChange(this.state.date)}>OK</Button>
            </Fragment>
        )
    }
}

export default DateInput
