import React from 'react'
import { Helmet } from 'react-helmet'
import Time from "../components/time";


const TITLE = 'Il est reste {`${minute}:${seconde}`}'

class dynamicTitle extends React.Component {
  render () {
    return (
      <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      </>
    )
  }
}

export default dynamicTitle;
