import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { colors } from '../../constants/colors';
import appSlice from '../../slices/app';
import { keyframes } from 'styled-components';

const CounterDemo = () => {

    const dispatch = useDispatch();
    const { counter } = useSelector(state => state.app);

    function handleDecrementButtonClick() {
        dispatch(appSlice.actions.decrement());
    }

    function handleIncrementButtonClick() {
        dispatch(appSlice.actions.increment());
    }

    return (
        <StyledCounterDemo>
            <Counter key={counter}>{ counter }</Counter>
            <Buttons>
                <Button onClick={handleDecrementButtonClick}>−</Button>
                <Button onClick={handleIncrementButtonClick}>＋</Button>
            </Buttons>
        </StyledCounterDemo>
    )
}

const StyledCounterDemo = styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const counterEnter = keyframes`
    from { 
        transform: scale(1.1);
        opacity: 0;
    }
`

const Counter = styled.div`
    font-size: 240px;
    font-weight: 700;

    user-select: none;

    animation: ${counterEnter} .3s cubic-bezier(.17,.67,.49,2.11);
`

const Buttons = styled.div`
    margin-top: 40px;
`

const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 64px;
    height: 64px;

    padding: 0;
    margin: 0 8px;
    border: 1px solid currentColor;
    border-radius: 50em;

    font-size: 32px;
    font-weight: 400;
    color: ${ colors.primary };

    background-color: transparent;

    transition: background-color .1s, transform .1s;

    &:hover {
        background-color: ${ colors.primary };
        color: ${ colors.white };
    }

    &:active {
        background-color: ${ colors.text };
        transform: scale(0.95);
    }
`

export default CounterDemo