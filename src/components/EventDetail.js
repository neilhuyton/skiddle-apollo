import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class EventDetail extends Component {
  render() {
    console.log(this.props);
    
    if (this.props.eventQuery && this.props.eventQuery.loading) {
      return <div>Loading</div>
    }

    if (this.props.eventQuery && this.props.eventQuery.error) {
      return <div>Error</div>
    }

    const { event } = this.props.eventQuery

    return (
      <div>
        <p>Name: {event.eventname}</p>
        <p>Start: {event.dateStart}</p>
        <p>End: {event.dateEnd}</p>
        <p>Description: {event.description}</p>
        <p>Price: {event.entryprice}</p>
        <p>{event.cancelled === "1" && 'Cancelled'}</p>
        <p>Genres: {event.genres.map((genre, i, arr) => (
            `${genre.name}${i !== arr.length-1 ? ', ' : ''}`
        ))}</p>
        <p>Doors open: {event.openingtimes.doorsopen}</p>
        <p>Doors close: {event.openingtimes.doorsclose}</p>
        <p>Last entry: {event.openingtimes.lastentry}</p>
        <p>Venue:</p>
        <ul>
          <li>{event.venue.name}</li>
          <li>{event.venue.address}</li>
          <li>{event.venue.town}</li>
          <li>{event.venue.postcode}</li>
          <li>{event.venue.phone}</li>
          <li>{event.venue.latitude}</li>
          <li>{event.venue.longitude}</li>
          <li>{event.venue.link}c</li>
        </ul>
        { event.artists.length > 0 &&
          <p>Artists:</p>
        }
        {event.artists.map((artist, i) => (
          <ul key={i}>
            <li><strong>{artist.name}</strong></li>
            { artist.spotifymp3url && <li>{artist.spotifymp3url}</li> }
            { artist.spotifyartisturl && <li>{artist.spotifyartisturl}</li> }
          </ul>
        ))}  
      </div>
    )
  }
}

export const EVENT_QUERY = gql`
  query EventQuery ($id: ID!) {
    event (id: $id) {
      id
      eventname
      description
      cancelled
      imageurl
      largeimageurl
      link
      date
      dateStart
      dateEnd
      enddate
      description
      minage
      entryprice
      openingtimes {
        doorsopen
        doorsclose
        lastentry
      }
      genres {
        genreid
        name
      }
      venue {
        id
        name
        address
        town
        postcode
        phone
        latitude
        longitude
        link
      }
      artists {
        artistid
        name
        spotifymp3url
        spotifyartisturl
      }
    }
  }
`

export default graphql(EVENT_QUERY, {
  name: 'eventQuery',
  options: ownProps => {
    const id = Number(ownProps.match.params.id)
    return {
      variables: { id },
    }
  },
})(EventDetail)
