import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = { lat: null, erroMessage: " " };
    }

    componentDidMount()
    {   
        window.navigator.geolocation.getCurrentPosition(
            (position) => { console.log(this.state.lat); this.setState({ lat: position.coords.latitude })}, 
            (err) => this.setState({ errorMessage: err.message }), 
        );
    }

    render() {

        if (!this.state.errorMessage && this.state.lat)
        {
            console.log(this.state.lat);
            return <SeasonDisplay latitude = {this.state.lat} />;
        }
        if (this.state.errorMessage && !this.state.lat)
        {
            return <div> Error: { this.state.errorMessage} </div>
        }

        return <Loading />;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));