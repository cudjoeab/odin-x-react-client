import React from 'react'
import App from './App'
import { configure, shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('<App />', () => {
  it('should have a div', () => {
    const appComponent = shallow(<App/>)
    expect(appComponent.find('div')).toHaveLength(1)
  })
})