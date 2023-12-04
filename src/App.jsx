import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { pages } from './routes/routes';
import { NavbarComponent } from './components/ui/NavbarComponent';

const App = () => {
  return (
    <Fragment>
      <NavbarComponent />
      <Routes>
        {
          pages.map((page, index) =>
            <Route path={page.path} element={page.component} key={page.id} />
          )
        }
      </Routes>

    </Fragment>
  );
};

export default App;


