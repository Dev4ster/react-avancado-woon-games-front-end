import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakPoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakPoint
  greaterThen?: breakPoint
}

const mediaMatchModifiers = {
  lessThan: (size: breakPoint) => css`
    ${media.lessThan(size)`
      display: block;
    `}
  `,
  greaterThen: (size: breakPoint) => css`
    ${media.greaterThan(size)`
      display: block;
    `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThen }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThen && mediaMatchModifiers.greaterThen(greaterThen)}
  `}
`
