import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';

const Navbar = () => {

    const { counter } = useSelector(state => state.app);

    return (
        <StyledNavbar>
            <Logo>Simpleinfo</Logo>
            <Subtitle>React project start kit</Subtitle>
            <Links>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/counter-demo'>Counter Demo (Counter: {counter})</StyledLink>
            </Links>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.header`
    position: sticky;
    top: 24px;
    width: 360px;
    height: calc(100vh - 48px);

    margin: 24px;
    padding: 64px 32px;
    border-radius: 24px;

    background: ${ colors.higherBackground };

    ${ respondTo.md } {

        z-index: 1;
        top: 16px;
        
        width: calc(100% - 32px);
        height: auto;
        
        margin: 16px;
        padding: 12px;
        border-radius: 12px;
    }
`

const Logo = styled.h1`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    color: ${ colors.primary };

    ${ respondTo.md } {
        text-align: left;
        font-size: 24px;
    }
`

const Subtitle = styled.h2`
    margin-top: 8px;
    font-size: 14px;
    text-align: center;
    color: ${ colors.gray };

    ${ respondTo.md } {
        text-align: left;
    }
`

const Links = styled.nav`
    margin-top: 80px;
    
    ${ respondTo.md } {
        margin-top: 12px;
    }
`

const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;

    margin-top: 8px;
    padding: 12px 24px;
    border-radius: 12px;

    font-size: 16px;
    font-weight: 700;
    line-height: 1.4em;

    transition: background .15s, color .15s;

    &::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        
        margin-right: 8px;
        border-radius: 50em;

        background: currentColor;
    }

    &:hover, &.active {
        background-color: ${ colors.primary };
        color: ${ colors.white };
    }

    ${ respondTo.md } {
        margin-top: 4px;
        padding: 4px 12px;
        border-radius: 8px;
    }

`

export default Navbar