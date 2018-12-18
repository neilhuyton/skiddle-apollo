import { Component } from 'react'
import gql from "graphql-tag";
import { graphql } from 'react-apollo'

export const EVENTS_QUERY = gql`
  query EventsQuery(
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
    $genreId: Int
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
        genreId: $genreId
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

class EventsQuery extends Component {
  render() {
    return this.props.children(this.props.data);
  }
}

export default graphql(EVENTS_QUERY)(EventsQuery);