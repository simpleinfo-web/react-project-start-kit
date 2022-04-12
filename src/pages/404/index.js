import styled from 'styled-components';
import { colors } from '../../constants/colors';

const NotFoundPage = () => {
    return (
        <StyledNotFoundPage>
            <h3>404</h3>
            <h4>Page Not Found</h4>
        </StyledNotFoundPage>
    )
}

const StyledNotFoundPage = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
        font-size: 24px;
        font-weight: 700;
        color: ${ colors.primary };
    }
    
    h4 {
        font-size: 16px;
        margin-left: 16px;
        font-weight: 400;
        color: ${ colors.text };
    }
`

export default NotFoundPage