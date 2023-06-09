import React from 'react'
import { StyledSocialIcons } from './styles/Sociall.styled'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

function Sociall() {
  return (
    <StyledSocialIcons>

<li>
        <a href='https://twitter.com'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://facebook.com'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='https://linkedin.com'>
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  )
}

export default Sociall