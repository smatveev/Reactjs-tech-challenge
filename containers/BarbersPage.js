import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Pages, Api } from '../helpers/consts.js';
import { isBarberHasService } from '../helpers/common.js';
import Grid from '../components/Grid.js';
import BarberCard from '../components/Barber.js';
import Order from '../containers/Order.js';

const BarbersPage = ({ barber, service, onChoice }) => {
    const history = useHistory();

    const [data, setData] = useState();
    useEffect(() => {
        fetch(Api.BARBERS)
            .then((res) => res.json())
            .then(data => setData(data));
    }, []);

    let filteredData = [];
    if (service) {
        filteredData = data?.filter(({ services }) =>
            services.some(({ id }) => id === service.id)
        );
    }
    else {
        filteredData = data;
    }

    const handleSetBarber = useCallback(
        (barberId) => () => {
            const choice = data?.find(({ id }) => id === barberId);
            onChoice(choice);
            if (!service || !isBarberHasService(choice, service)) {
                history.push(Pages.SERVICES);
            }
        },
        [data, onChoice, service]
    );

    return (
        <>
            <Grid
                title="Choose a professional"
                items={filteredData}
                renderItem={({ id, firstName, lastName, photo }) => (
                    <BarberCard
                        key={id}
                        firstName={firstName}
                        lastName={lastName}
                        photo={photo}
                        selected={barber?.id === id}
                        onClick={handleSetBarber(id)}
                    />
                )}
            />,
            <Order barber={barber} service={service} />
        </>
    );
};

export default BarbersPage;