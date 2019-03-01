import React, {Component} from 'react';
import axios from 'axios'
class Auth extends Component {
  constructor(props){
    super(props)
    this.state = {
      username:'',
      password:''
    }
  }

  handleChange(prop, value) {
    this.setState({
      [prop]: value
    })
  }

  
  register = async () => {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    try {
      let res = await axios.post('/auth/register', user)
      this.props.history.push('/dashboard')
    } catch (err) {
      alert('this user already exists.')
    }
  }

  login = async () => {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    try {
      let res = await axios.post('/auth/login', user);
      this.props.history.push('/dashboard')
    } catch {
      alert('incorrect username or password.')
    }
  }

    render() {
      const {username, password} = this.state

      return (
        <div className="Auth">
          <input value={username} onChange={e => this.handleChange('username',e.target.value)}/>
          <input value={password} type='password' onChange={e => this.handleChange('password', e.target.value)}/>
          <button onClick={this.login}>Login</button>
          <button onClick={this.register}>Register</button>
        </div>
      );
    }
  }
  
  export default Auth;