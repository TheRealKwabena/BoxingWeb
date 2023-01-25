import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
export const Nav = styled.nav`
display:flex;
justify-content: space-around;
gap: 150px;
align-items: center;
background: transparent;
min-height: 50px;
margin: -5px 10px;
width: 100%


`
export const LogoContainer = styled.div`
    display:flex;
    height: 30px
    text-align: center;
    justify-content: center
    margin-top: 20px
    
`
export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
cursor: pointer;
&.active {
  color: #000000;
}
`;

export const SignInButton= styled.button `
    & {
        background: #C90B0B;
        color: #ffffff; 
        padding: 8px 8px;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 10px;
        font-family: 'Saira Condensed', sans-serif;
    },
    &:hover {
        cursor: pointer;
        box-shadow: 0px 5px rgba(0,0,0,0)
    }

    
`

export const NavMenu = styled.div`
    display:flex;
    align-items: center;
    justify-content: center


`