import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import PrimeMedianInput from '../PrimeMedianInput/PrimeMedianInput'

// required by enzume for testing in React 16
configure({ adapter: new Adapter() })


it('renders without crashing', () => {
  // eslint-disable-next-line no-undef
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders PrimeMedianInput component', () => {
  const wrapper = shallow( <App /> )
  expect(wrapper.find(PrimeMedianInput)).toHaveLength(1)
})