import React, { Component, Fragment } from 'react'

class Genres extends Component {    
    render() {
        if (!this.props.genres) {
            return <div>Loading</div>
        }

        const { genres, onGenreChange } = this.props

        return (
            <Fragment>
                <select
                    ref="genreInput"
                    onChange={onGenreChange}
                    defaultValue=''
                    required>
                    <option value="" disabled>Genre</option>
                    {
                        genres.map(genre => (
                            <option key={genre.GenreID}
                                value={genre.GenreID}>{genre.GenreName}</option>
                        ))
                    }
                </select>
            </Fragment>
        )
    }
}

export default Genres