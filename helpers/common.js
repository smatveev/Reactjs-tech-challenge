export function mapServiceToViewModel({ name, id, duration, price, currency }) {
    return {
        name,
        id,
        duration: stringifyDuration(duration),
        price: stringifyPrice(price, currency),
    };
}

export function stringifyDuration(duration) {
    let remainder = duration;
    let resultParts = [];

    if (duration > 60) {
        const hours = Math.floor(duration / 60);

        resultParts.push(`${hours} hr${hours > 1 ? 's' : ''}`);
        remainder = remainder % 60;
    }

    if (remainder > 0) {
        resultParts.push(`${remainder} min`);
    }

    return resultParts.join(' and ');
}

export function stringifyPrice(price, currency) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
    }).format(price / 100);
}

export function isBarberHasService(barber, service) {
        return barber?.services.some(({ id }) => id === service?.id) ?? false;
}

export function getBarberName(firstName, lastName) {
        return `${firstName} ${lastName[0]}.`;
}