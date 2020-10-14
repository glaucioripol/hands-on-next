import React from 'react'
import { Header } from '../../components'
import { IGithubModel } from '../../interfaces'

export const Home: React.FC<IGithubModel> = ({ avatar_url, bio, blog, html_url }) => (
  <>
    <Header title="Hello world"/>

  </>
)
