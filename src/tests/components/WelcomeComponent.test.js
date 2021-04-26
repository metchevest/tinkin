import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WelcomeComponent from '../../components/WelcomeComponent'

describe('Tests for WelcomeComponent', () => {
  it('shows "Hello World!!" text', () => {
    const { getByText } = render(<WelcomeComponent />)
    expect(getByText('Hello World!!')).toBeInTheDocument()
  });
});
