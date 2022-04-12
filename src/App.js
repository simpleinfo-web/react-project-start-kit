import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import CounterDemo from './pages/CounterDemo';

import Navbar from './components/Navbar';
import GlobalStyle from './components/GlobalStyle';

import appSlice from './slices/app';

const store = createStore(
    combineReducers({
        app: appSlice.reducer
    })
)

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Provider store={store}>
                    <AppLayout>
                        <Navbar />

                        <ContentWrapper>
                            <Routes>
                                <Route path='/' element={<Home/>} />
                                <Route path='/counter-demo' element={<CounterDemo/>} />
                            </Routes>
                        </ContentWrapper>
                    </AppLayout>
                </Provider>
            </BrowserRouter>
        </>
    );
}

const AppLayout = styled.div`
    position: relative;
    min-height: 100vh;
    
    display: flex;
    align-items: stretch;
`

const ContentWrapper = styled.div`
    flex: 1;  
    margin: 40px;
`

export default App;
