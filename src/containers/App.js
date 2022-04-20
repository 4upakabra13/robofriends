import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import './app.css'


class App extends Component {
        constructor() {
            super()
            this.state = {
                robots: [],
                searchfield: ''
            }

        }

        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response=> {
                    return response.json()
                })
                .then(users => {
                    this.setState({robots:users}) 
                })
        }

        onSearchChange = (event) => {
            this.setState({ searchfield: event.target.value })
        }

        render() {
            const { robots, searchfield } = this.state;
            const filterRobots = robots.filter(robots =>{
                return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return(
                <div className="tc">
                    <h1 className="f-subheadline lh-title">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                        <CardList robots={filterRobots} />
                </div>
                )};
        }  
} 

    

export default App;