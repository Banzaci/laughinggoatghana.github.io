import React from 'react'
import { initGA, logPageView } from './analytics'

export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return (
      <div className="wrapper">
        {this.props.children}
        <style jsx>{`
          .wrapper {
            position: absolute;
            top:0;
            left:0;
            width: 100%;
            padding: 0 10px;
          }
          `}</style>
      </div>
    )
  }
}
