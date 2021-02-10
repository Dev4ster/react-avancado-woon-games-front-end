import { Story, Meta } from '@storybook/react/types-6-0'
import { Settings } from 'react-slick'
import styled from 'styled-components'
import Slider from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}
const Slide = styled.div`
  background-color: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  text-align: center;
  font-size: 10rem;
`

export const Horizontal: Story = () => (
  <Slider settings={settings}>
    <Slide>slide 1</Slide>
    <Slide>slide 2</Slide>
    <Slide>slide 3</Slide>
    <Slide>slide 4</Slide>
  </Slider>
)

const settingsVertical: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: Story = () => (
  <Slider settings={settingsVertical}>
    <Slide>slide 1</Slide>
    <Slide>slide 2</Slide>
    <Slide>slide 3</Slide>
    <Slide>slide 4</Slide>
  </Slider>
)
