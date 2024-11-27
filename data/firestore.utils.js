const admin = require('firebase-admin');

const createCounter = () => {
    let count = 0;
    return (n) => {
        count += n;
        console.log(count); // eslint-disable-line
    };
};

const counter = createCounter();

const convertObjectTimestamps = (doc) => {
    if (!(doc instanceof Object)) {
        return doc;
    }
    // TODO: Array of arrays and array of dates not handled
    return Object.entries(doc).reduce((acc, [key, value]) => {
        if (value instanceof admin.firestore.Timestamp) {
            return {
                ...acc,
                [key]: value.toDate(),
            };
        }

        if (value instanceof Array) {
            return {
                ...acc,
                [key]: value.map(convertObjectTimestamps),
            };
        }

        if (value instanceof Object) {
            return {
                ...acc,
                [key]: convertObjectTimestamps(value),
            };
        }

        return {
            ...acc,
            [key]: value,
        };
    }, {});
};

const handleDocumentSnapshot = (snapshot) => {
    if (process.env.NODE_ENV === 'development') {
        counter(1);
    }

    if (!snapshot.exists) {
        return null;
    }

    return {
        id: snapshot.id,
        ...convertObjectTimestamps(snapshot.data()),
    };
};

const handleCollectionSnapshot = (snapshot) => {
    if (process.env.NODE_ENV === 'development') {
        counter(snapshot.docs.length);
    }
    return snapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...convertObjectTimestamps(doc.data()),
        };
    });
};

module.exports = {
    handleCollectionSnapshot,
    handleDocumentSnapshot,
};
