import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const bannerProps = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...bannerProps} />)

    // verificar se o titulo existe
    expect(
      screen.getByRole('heading', { name: bannerProps.title })
    ).toBeInTheDocument()
    // verificar se o subtitle existe
    expect(
      screen.getByRole('heading', {
        name: bannerProps.subtitle.replace(/(<([^>]+)>)/gi, '')
      })
    ).toContainHTML(bannerProps.subtitle)
    // verificar se o subtitle existe

    expect(
      screen.getByRole('img', { name: bannerProps.title })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
