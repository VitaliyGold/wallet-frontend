import './styles/index.less';
import { AppRouter } from './router/AppRouter';
import { MainLayout } from './layout/MainLayout';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './providers';

const App = () =>  {

  return (
    <>
        <BrowserRouter>
            <StoreProvider>
                <MainLayout>
                    <AppRouter/>
                </MainLayout>
            </StoreProvider>
        </BrowserRouter>
    </>
  )
}

export {
    App,
}
