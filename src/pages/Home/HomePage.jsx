import { Fragment } from 'react';
import { pageSections } from '../../routes/routes';

const HomePage = () => {
  return (
    <Fragment>
      {
        pageSections.map((section, index) => <Fragment key={section}>
          {section.component}
        </Fragment>)
      }
    </Fragment>
  );
}

export default HomePage;