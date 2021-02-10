import 'match-media-mock'
import { render, screen } from '@testing-library/react'

import Slider from '.'
import { Settings } from 'react-slick'

const settings: Settings = {
  slidesToShow: 1,
  infinite: false
}

describe('<Slider />', () => {
  it('should render children as slider item', () => {
    render(
      <Slider settings={settings}>
        <p>item 1</p>
        <p>item 2</p>
        <p>item 3</p>
      </Slider>
    )

    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(
      screen.getByText(/item 3/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')
  })
})
