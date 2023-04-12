import styled from 'styled-components'
import logo from './assets/logo.png'
import perfil from './assets/perfil.png'
import Container from '../Container'

const StyledHeader = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em
`
const StyledLink = styled.a`
 color: var(--azul-escuro);
 font-weight: 700;
`
function Header() {
    return (
        <StyledHeader>
        <img src={logo} alt="logo da empresa Voll" />
            <Container>
            <img src={perfil} alt="imagem de perfil do usuário" />
            <StyledLink href="#"> Sair</StyledLink>
            </Container>
        </StyledHeader>
        
    
    )
}
export default Header;