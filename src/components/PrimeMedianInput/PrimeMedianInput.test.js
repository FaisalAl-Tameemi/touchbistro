import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import ReactDOM from 'react-dom'
import PrimeMedianInput from './PrimeMedianInput'
import { InputNumber, Button } from 'antd'

// required by enzume for testing in React 16
configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  // eslint-disable-next-line no-undef
  const div = document.createElement('div')
  ReactDOM.render(<PrimeMedianInput />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders child elements from Antd UI library', () => {
  const wrapper = shallow( <PrimeMedianInput /> )
  expect(wrapper.find(InputNumber)).toHaveLength(1)
  expect(wrapper.find(Button)).toBeTruthy()
})
