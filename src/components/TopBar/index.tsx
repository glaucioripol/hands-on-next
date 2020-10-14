import React from 'react'
import Link from 'next/link'

import { TopBarContainer, ListOptionsMenu } from './styles'

export const TopBar: React.FC = () => (
  <TopBarContainer>
    <h1>Gláucio Dev &gt;_ </h1>

    <nav>
      <ListOptionsMenu>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/fale_comigo">Fale comigo</Link>
        </li>
      </ListOptionsMenu>
    </nav>
  </TopBarContainer>
)
