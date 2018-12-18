import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'

import Button from 'material-ui/Button';

class Search extends Component {
    state = {
        events: [],
        genres: [],
        latitude: null,
        longitude: null,
        radius: null,
        country: null,
        getdistance: null,
        keyword: '',
        eventcode: null,
        ticketsavailable: null,
        specialFeatured: null,
        imagefilter: null,
        description: null,
        under18: null,
        minDate: null,
        maxDate: null,
        venueid: null,
        a: null,
        b: null,
        g: 9,
        order: null,
        limit: null,
        shufflelimit: null,
        offset: null
    }
  
    render() {
        const {genres, onGenreChange} = this.props
        
        return (
            <div>
                <input
                    type="text"
                    onChange={e => this.setState({ keyword: e.target.value })}
                />
                <Button color="primary"  onClick={() => this._executeSearch()}>OK</Button>
                {this.state.events.map((event) => (
                    <li key={event.id}>
                        <Link to={`/events/${event.id}`}>{event.eventname}</Link>
                    </li>
                ))}
            </div>
        )
    }

    _executeSearch = async () => {
        const { keyword, latitude, g } = this.state
        const result = await this.props.client.query({
            query: EVENT_SEARCH_QUERY,
            variables: { keyword, latitude, g },
        })
        const events = result.data.events
        this.setState({ events })
    }
}

export const EVENT_SEARCH_QUERY = gql`
  query SearchQuery(
    $latitude: Float,
    $longitude: Float
    $radius: Int
    $country: String
    $getdistance: Boolean
    $keyword: String
    $eventcode: String
    $ticketsavailable: Boolean
    $specialFeatured: Boolean
    $imagefilter: Boolean
    $description: Boolean
    $under18: Boolean
    $minDate: String
    $maxDate: String
    $venueid: Int
    $a: Int
    $b: Int
    $g: Int
    $order: String
    $limit: Int
    $shufflelimit: Int
    $offset: Int
    ) {
    events(
        latitude: $latitude,
        longitude: $longitude
        radius: $radius
        country: $country
        getdistance: $getdistance
        keyword: $keyword
        eventcode: $eventcode
        ticketsavailable: $ticketsavailable
        specialFeatured: $specialFeatured
        imagefilter: $imagefilter
        description: $description
        under18: $under18
        minDate: $minDate
        maxDate: $maxDate
        venueid: $venueid
        a: $a
        b: $b
        g: $g
        order: $order
        limit: $limit
        shufflelimit: $shufflelimit
        offset: $offset
    ) {
      id
      eventname
    }
  }
`

export default withApollo(Search)

// export default graphql(EVENT_SEARCH_QUERY, {
//   name: 'eventQuery'
// })(EventList)
