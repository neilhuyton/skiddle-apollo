import React, { Component, Fragment } from 'react'
import GenresQuery from './GenresQuery';
import EventsQuery from './EventsQuery';
import GenresList from './GenresList';
import EventList from './EventList';
import DateInput from './DateInput';

class SearchContainer extends Component {
    state = {
        genreId: null,
        date: null
    }
    
    onGenreChange(event) {
        this.setState({genreId: event.target.value})
    }

    onDateChange(date) {
        this.setState({date})
    }
  
    render() {
        const eventProps = {
            genreId: this.state.genreId,
            minDate: this.state.date,
        }
        
        return (
            <Fragment>
                <DateInput 
                    onDateChange={this.onDateChange.bind(this)} 
                    date={this.state.date} />
                <GenresQuery>
                    {({ genres }) => 
                        <GenresList genres={genres} 
                            onGenreChange={this.onGenreChange.bind(this)} />}
                </GenresQuery>
                <EventsQuery {...eventProps}>
                    {({ events }) => <EventList events={events} />}
                </EventsQuery>
            </Fragment>
        )
  }
}

export default SearchContainer
