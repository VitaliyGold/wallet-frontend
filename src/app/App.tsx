import './styles/index.less';
import { AppRouter } from './router/AppRouter';
import { MainLayout } from './layout/MainLayout';
import { BrowserRouter } from 'react-router-dom';

const App = () =>  {

  return (
    <>
        <BrowserRouter>
            <MainLayout>
                <AppRouter/>
            </MainLayout>
        </BrowserRouter>
    </>
  )
}

export {
    App,
}
