import React , {Component} from 'react';
import { SocialMedia , SocialDiv ,  Icon , Pone , SpanOne , SpanTwo } from'./style.js';
import axios from 'axios';




class Socailmedia extends Component {

  state = {
    social: []
  }

  componentDidMount() {
    axios.get('js/data.json').then(res => {this.setState({social : res.data.social})})
  }

  render() {

    const {social} = this.state;

    const socialList = social.map( (socialItem) => {
      return (
          <SocialDiv item={socialItem.id} key={socialItem.id}>
            <Icon className={socialItem.icon}></Icon>
            <Pone>
                <SpanOne>{socialItem.title}</SpanOne>
                <SpanTwo>{socialItem.body}</SpanTwo>
            </Pone>
          </SocialDiv>
      )
    })
    return (
      <SocialMedia>
        {socialList}
      </SocialMedia>
    )
  }
}

export default Socailmedia;
