import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styles from './index.css';
import BrandPage from './containers/BrandPage.js';
import Logo from './components/Logo.js';
import { Pages } from './helpers/consts';
import ServicesPage from './containers/ServicesPage.js';
import BarbersPage from './containers/BarbersPage.js';

// mock http requests
import './api';

const App = () => {

  const [barber, setBarber] = useState(null);
  const [service, setService] = useState(null);

  const handleServiceChoice = useCallback(
    (serviceChoice) => {
      if (
        service &&
        serviceChoice.id !== service.id &&
        barber?.services.every(({ id }) => id !== serviceChoice.id)
      ) {
        setBarber(null);
      }

      setService(serviceChoice);
    },
    [barber?.services, service]
  );

  const handleBarberChoice = useCallback(
    (barberChoice) => {
      if (
        barber &&
        barberChoice.id !== barber?.id &&
        barberChoice.services.every(({ id }) => id !== service?.id)
      ) {
        setService(null);
      }

      setBarber(barberChoice);
    },
    [barber, service?.id]
  );

  return (
    <>
      <Logo />
      <Router>
        <Switch>
          <Route exact path={Pages.HOMEPAGE}>
            <BrandPage />
          </Route>
          <Route exact path={Pages.SERVICES}>
            <div className={styles.wrapper}>
              <ServicesPage
                barber={barber}
                service={service}
                onChoice={handleServiceChoice}
              />
            </div>
          </Route>
          <Route exact path={Pages.PROFESSIONALS}>
            <div className={styles.wrapper}>
              <BarbersPage
                barber={barber}
                service={service}
                onChoice={handleBarberChoice}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

const MOUNT_NODE = document.getElementById('react-root');
ReactDOM.render(<App />, MOUNT_NODE);
