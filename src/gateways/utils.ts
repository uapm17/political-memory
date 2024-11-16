import { DocumentData, Timestamp } from 'firebase/firestore';

const createCounter = () => {
    let count = 0;
    return (n: number) => {
        count += n;
        console.log(count); // eslint-disable-line
    };
};

const counter = createCounter();

export const convertObjectTimestamps = (doc: any): Object => {
    if (!(doc instanceof Object)) {
        return doc;
    }
    // TODO: Array of arrays and array of dates not handled
    return Object.entries(doc).reduce((acc, [key, value]) => {
        if (value instanceof Timestamp) {
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

export const handleDocumentSnapshot = (snapshot: DocumentData) => {
    if (process.env.NODE_ENV === 'development') {
        counter(1);
    }

    if (!snapshot.exists()) {
        return null;
    }

    return {
        ...convertObjectTimestamps(snapshot.data()),
        id: snapshot.id,
    };
};

export const handleCollectionSnapshot = (snapshot: DocumentData) => {
    if (process.env.NODE_ENV === 'development') {
        counter(snapshot.docs.length);
    }
    return snapshot.docs.map((doc: DocumentData) => ({
        ...convertObjectTimestamps(doc.data()),
        id: doc.id,
    }));
};
