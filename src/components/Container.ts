import styled, { css } from 'styled-components'
import { TypeTheme } from '../styles'

export const Container = styled.main`
  ${({ theme }: TypeTheme) => css`
    margin: 0 auto;
    padding: var(--heightTopBarDesktop) ${theme.spaces.large} 0;

    @media (min-width: 768px) {
      width: 750px;
    }
    @media (min-width: 992px) {
      width: 970px;
    }
    @media (min-width: 1200px) {
      width: 1170px;
    }
    @media screen and (max-width: 1024px) {
      padding: var(--heightTopBarMobile) ${theme.spaces.large} 0;
    }
  `}
`
