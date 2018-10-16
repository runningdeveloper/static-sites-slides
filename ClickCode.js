import React from 'react'
import PropTypes from 'prop-types'
// import withDeck from 'mdx-deck/with-deck'
// import setSteps  from 'mdx-deck/with-steps'
// import { modes } from 'mdx-deck/modes'

import { FullScreenCode } from 'mdx-deck/layouts'

export default class ClickCode extends React.Component {
  // static propTypes = {
  //   children: PropTypes.array.isRequired,
  //   deck: PropTypes.object.isRequired
  // }

  constructor (props) {
    super(props)
    this.state = {
      closed: true
    }
    this.handleClick = this.handleClick.bind(this);
    // const { update, index } = props.deck
    // const steps = React.Children.toArray(props.children).length
    // update(setSteps(index, steps))
  }

  handleClick(event) {
    console.log('i clicked');
    this.setState({closed: !this.state.closed});
  }

  render() {
    // console.log('click props', this.props);
    // const children = React.Children.toArray(this.props.children)
    //   .map(child => typeof child === 'string'
    //     ? <div>{child}</div>
    //     : child
    //   )
    // const { step, mode } = this.props.deck

    return (
      <div>
        {this.state.closed &&
        <img onClick={event => this.handleClick(event)} src={this.props.image}/>}
        {!this.state.closed &&
          <img style={
            {
              width: '100%',
              height: '100%',
            }
          } onClick={event => this.handleClick(event)} src={this.props.imageTwo}/>
        }
      </div>
    )
  }
}