import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './pages/Home';
import CounterDemo from './pages/CounterDemo';

import Navbar from './components/Navbar';
import GlobalStyle from './components/GlobalStyle';

import appSlice from './slices/app';
import NotFoundPage from './pages/404';

const store = createStore(
    combineReducers({
        app: appSlice.reducer
    })
)

const gqlClient = new ApolloClient({
    uri: 'https://todos.d.simpleinfo.tw/graphql',
    cache: new InMemoryCache(),
    headers: { 
        'api-key': 'fb47752e-ad6a-46ef-a3c5-fc2d8b3024ba'
    }
})

const ServiceProviders = ({ children }) => (
    <BrowserRouter>
        <ReduxProvider store={store}>
            <ApolloProvider client={gqlClient}>
                { children }
            </ApolloProvider>
        </ReduxProvider>
    </BrowserRouter>
)

const App = () => (
    <>
        <GlobalStyle />
        <ServiceProviders>
            <AppLayout>
                <Navbar />
                <ContentWrapper>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/counter-demo' element={<CounterDemo/>} />
                        <Route path='*' element={<NotFoundPage/>} />
                    </Routes>
                </ContentWrapper>
            </AppLayout>
        </ServiceProviders>
    </>
);

const AppLayout = styled.div`
    position: relative;
    min-height: 100vh;
    
    display: flex;
    align-items: stretch;
`

const ContentWrapper = styled.div`
    flex: 1;  
    margin: 40px 24px;
`

export default App;
