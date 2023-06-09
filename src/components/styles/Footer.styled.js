import styled from "styled-components"
;
  

export const FooterStyles=styled.footer`
background-color:${({theme})=>theme.colors.footer};

color: #fff;
  padding: 100px 0 60px;
  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
    color:"red"
  }


`