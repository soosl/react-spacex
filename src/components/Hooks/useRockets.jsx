import { useState, useEffect } from 'react';
import { FetchData } from '../../service/FetchData';

const fetchData = new FetchData();

const useRockets = () => {
    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        fetchData.getRockets().then(data => setRockets(data));
    }, []);

    const getRocket = name => rockets.find(item => item.name === name.replace('_', ' '));

    return { getRocket };
};

export { useRockets };
