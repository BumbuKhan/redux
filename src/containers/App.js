import React, {Component} from 'react'
import {connect} from 'react-redux'

class App extends Component {
    render() {
        const { name } = this.props.user;
        const { year, photos } = this.props.page;

        return <div>
            <p>Hi from App {name}</p>
            <p>You have got {photos.length} photos for {year}</p>
        </div>
    }
}

function mapStatetoProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

export default connect(mapStatetoProps)(App)