import { Component } from 'react'
import gql from "graphql-tag";
import { graphql } from 'react-apollo'

const GENRES_QUERY = gql`
  query GenresQuery {
    genres {
      GenreID
      GenreName
    }
  }
`

class GenresQuery extends Component {
  render() {
    return this.props.children(this.props.data);
  }
}

export default graphql(GENRES_QUERY)(GenresQuery);