import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Pages, Api } from '../helpers/consts.js';
import { isBarberHasService, mapServiceToViewModel } from '../helpers/common.js';
import ServiceCard from '../components/Service.js';
import Grid from '../components/Grid.js';
import Order from '../containers/Order.js';

const ServicesPage = ({ barber, service, onChoice }) => { 
    const history = useHistory();

    const [data, setData] = useState();
    useEffect(() => {
        fetch(Api.SERVICES)
            .then((res) => res.json())
            .then(data => setData(data));
    }, []);
    const services = barber?.services ?? data
    const servicesViewModel = services?.map((service) => mapServiceToViewModel(service))

    const handleSetService = useCallback(
        (serviceId) => () => {
            const choice = services?.find(({ id }) => id === serviceId);
            onChoice(choice);
            if (!barber || !isBarberHasService(barber, choice)) {
                history.push(Pages.PROFESSIONALS);
            }
        },
        [barber, services, history, onChoice]
    );

    return (
        <>
        <Grid
            title="Choose a service"
            items={servicesViewModel}
            renderItem={({ name, duration, price, id }) => (
                <ServiceCard
                    key={id}
                    name={name}
                    duration={duration}
                    price={price}
                    selected={service?.id === id}
                 onClick={handleSetService(id)}
                />
            )}
        />,
        <Order barber={barber} service={service} />
        </>
    );
};

export default ServicesPage;