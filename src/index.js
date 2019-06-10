import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
// include AntDesign css file -- See https://ant.design for details
import 'antd/dist/antd.css'

/*eslint-disable no-undef*/
ReactDOM.render(<App />, document.getElementById('root'))
/* eslint-enable no-undef */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
