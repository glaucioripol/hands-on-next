import styled, { css } from 'styled-components'
import Link from 'next/link'
import { TypeTheme } from '../../styles'

export const ProfileImageContainer = styled.figure`
  display: grid;
  place-items: center;

  img {
    border-radius: 50vh;
  }
`

export const Section = styled.section`
  padding: ${({ theme }: TypeTheme) => theme.spaces.middle} 0;
  text-align: center;
`

export const TitleWhoIm = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 ${({ theme }: TypeTheme) => theme.spaces.middle};
`

export const BioParagraph = styled.p`
  ${({ theme }: TypeTheme) => css`
    font-size: ${theme.spaces.middle};
    margin: ${theme.spaces.middle};
  `}
`

export const ContactMeLink = styled.button`
  ${({ theme }: TypeTheme) => css`
    background-color: ${theme.colors.primary.color};
    border-radius: 0.5rem;
    border: 2px solid transparent;
    color: ${theme.colors.primary.contrastColor};
    cursor: pointer;
    font-size: ${theme.spaces.middle};
    font-weight: bolder;
    padding: ${theme.spaces.small};
    text-decoration: none;

    &:hover {
      background-color: ${theme.colors.primary.contrastColor};
      border: 2px solid ${theme.colors.primary.color};
      color: ${theme.colors.primary.color};
    }
  `}
`
