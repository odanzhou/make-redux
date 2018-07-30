import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
// import {connect} from './react-redux'
import {connect} from 'react-redux'

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    const {themeColor: color} = this.props
    const colorStyle = color ? {color} : null 
    return (
      <div>
        <p style={colorStyle}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}


// const mapStateToProps = ['themeColor']

const mapStateToProps = (state = {}) => {
  return {
    themeColor: state.themeColor
  }
}

Content = connect(mapStateToProps)(Content) 

export default Content