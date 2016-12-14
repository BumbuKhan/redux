import React, { PropTypes, Component } from 'react'

export default class Page extends Component{
    render() {
        const { year, photos } = this.props

        return <div>
            <p>You have got {photos.length} photos in {year}</p>
        </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photo: PropTypes.array.isRequired
}