// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import sanitizeHtml from 'sanitize-html';

const Hello = props => (
  <div style={{margin: "50px"}}>Hello <span dangerouslySetInnerHTML={{__html: props.name}}></span>!</div>
)

Hello.defaultProps = {
  name: '<strong>Sanitize HTML</strong>'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello />,
    document.body.appendChild(document.createElement('div')),
  )
})
