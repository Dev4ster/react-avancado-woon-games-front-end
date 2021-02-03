import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render white heading by default', () => {
    renderWithTheme(<Heading>Won Game</Heading>)

    expect(screen.getByRole('heading', { name: /Won Game/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render black heading', () => {
    renderWithTheme(<Heading color="black">Won Game</Heading>)

    expect(screen.getByRole('heading', { name: /Won Game/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render heading with a line left', () => {
    renderWithTheme(<Heading lineLeft>Won Game</Heading>)

    expect(screen.getByRole('heading', { name: /Won Game/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render heading with a line bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Game</Heading>)

    expect(screen.getByRole('heading', { name: /Won Game/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #3CD3C1',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Game</Heading>)

    expect(screen.getByRole('heading', { name: /Won Game/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /Won Game/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineBottom lineLeft>
        Won Game
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /Won Game/i })

    expect(heading).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })

    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
