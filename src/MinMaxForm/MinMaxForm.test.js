import React from 'react'
import MinMaxForm from './MinMaxForm'
import { shallow } from 'enzyme'

describe('MinMaxForm Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MinMaxForm />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})