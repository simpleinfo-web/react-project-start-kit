import styled from 'styled-components';
import { gql, useQuery } from "@apollo/client"
import { css } from 'styled-components';

import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';

const Home = () => {

    const { data, loading } = useQuery(gql`
        {
            todos {
                id, content, is_done
            }
        }
    `)

    return (
        <>
            <TodoTitle>Todos fetch demo</TodoTitle>
            <TodoList>
                { loading && <ListLoading>Loading ...</ListLoading> }
                { data?.todos.map( todo =>
                    <TodoItem key={todo.id} isDone={todo.is_done}>{ todo.content }</TodoItem>
                )}
            </TodoList>
        </>
    )
}

const ListLoading = styled.div`
    padding: 12px 24px;
    color: ${ colors.gray };
`

const TodoTitle = styled.h3`
    
    position: sticky;
    top: 24px;
    
    padding-bottom: 16px;
    border-bottom: 1px solid ${ colors.gray };

    font-size: 24px;
    font-weight: 900;

    backdrop-filter: blur(2px);
`

const TodoList = styled.ul`
    margin-top: 24px;
`

const TodoItem = styled.li`
    margin-top: 8px;
    padding: 12px 24px;
    border-radius: 12px;

    &:hover {
        background-color: ${ colors.higherBackground };
        box-shadow: 0 0 12px rgba(0,0,0,0.05);
    }

    ${({ isDone }) => isDone && css`
        color: ${ colors.primary};
        font-weight: 900;
        opacity: 0.3;
        pointer-events: none;
    `};

    ${ respondTo.md } {
        padding: 8px 12px;
    } 
`

export default Home