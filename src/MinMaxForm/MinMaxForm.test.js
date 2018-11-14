import React from 'react'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import MinMaxForm from './MinMaxForm'

describe('MinMaxForm Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MinMaxForm />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})