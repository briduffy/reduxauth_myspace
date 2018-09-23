import React, { Component, Fragment } from 'react'
import { 
  Button,
  Icon,
  Header,
} from 'semantic-ui-react'
import axios from 'axios'
import Friend from './Friend'


class Home extends Component {
  state = { friends: [] }

  addFriend = (id) => {
    let { friends } = this.state;
    this.setState({ friends: friends.filter( f => f.id !== id ) })
  }

  componentDidMount() {
    axios.get('/api/friends')
      .then( res=> this.setState({friends: res.data}))
  }

  sample = () => {
    const { friends } = this.state
    if (friends.length) {
      const index = Math.floor(Math.random() * friends.length)
      return friends[index]
    } else {
    return null
    }
  }

  render() {
    const friend = this.sample()
    if (friend) {
      return (
        <Fragment>
          <Header as='h1' textAlign='center'>Find Friends</Header>
          <Friend friend={friend}/>
          <Button basic fluid onClick={() => this.addFriend()}>
              <Icon name="add user"/>
              Add Friend
            </Button>
        </Fragment>
      )
    } else {
      return <Header textAlign="center">You have too many friends!</Header>
    }
  }
}

export default  Home