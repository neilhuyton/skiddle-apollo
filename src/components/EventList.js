import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

class EventList extends Component {
  render() {
    if (!this.props.events) {
      return <div>Loading</div>
    }

    const { events } = this.props

    return (
      <Fragment>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.eventname}</Link>
          </li>
        ))}
      </Fragment>
    )
  }
}

export default EventList
