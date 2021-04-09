import React, { Component } from 'react'
import FriendCard from './FriendCard/FriendCard';

import './RightBar.scss';

// i personally think this component is garbage
// mostly because of the way the render function handle the users state
// and also because of the way the query is made
export default class RightBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: null
        };
    }

    // this runs on the client side once the component loads and renders for the first time
    componentDidMount () {
        // Simple GET request using fetch
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({users: json}));
    }

    render() {
        const { users } = this.state;
        if (users) {
            return (
                <div className="right-bar">
                    <div className="title">Friends activity</div>
                    <div className="friends">
                        {users.map(user => (
                            <FriendCard
                                key={user.name}
                                name={user.name}
                                artist={user.company.bs}
                                song={user.company.name}
                            />
                        ))}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="right-bar">
                    <div className="title">Friends activity</div>
                    <div className="friends">

                    </div>
                </div>
            )
        }
    }
}
