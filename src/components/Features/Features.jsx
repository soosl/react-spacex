import { useEffect, useState } from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import { useParams } from 'react-router';
import { useRockets } from '../Hooks/useRockets';
import { Main } from '../Main/Main';
import './features.css';

const rocketImages = {
    'Falcon 1': 'falcon-1',
    'Falcon 9': 'falcon-9',
    'Falcon Heavy': 'falcon-heavy',
    Starship: 'starship',
};


const Features = () => {
    const [rocket, setRocket] = useState(null);
    const { rocketName } = useParams();
    const { getRocket } = useRockets();
    
    useEffect(() => {
        setRocket(getRocket(rocketName));
    }, [getRocket, rocketName]);

    return (
        <>
            {rocket && (
                <>
                    <Main rocket={rocket.name} />
                    <section className='features'>
                        <h2 className='features-title'>
                            {rocket.name}
                            <br />
                            Overview
                        </h2>
                        <div className='overview'>
                            <table className='table'>
                                <caption className='table-title'>Size</caption>
                                <thead>
                                    <tr>
                                        <td className='table-column'>HEIGHT</td>
                                        <td className='table-column'>
                                            {rocket.height.meters} m / {rocket.height.feet} ft
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='table-column'>
                                            DIAMETER
                                        </td>
                                        <td className='table-column'>
                                            {rocket.diameter.meters} m /{' '}
                                            {rocket.diameter.feet} ft
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='table-column'>MASS</td>
                                        <td className='table-column'>
                                            {rocket.mass.kg} kg / {rocket.mass.lb} lb
                                        </td>
                                    </tr>
                                    {rocket.payload_weights.map(item => (
                                        <tr key={item.id}>
                                            <td className='table-column'>
                                                PAYLOAD TO{' '}
                                                {item.id.toUpperCase()}
                                            </td>
                                            <td className='table-column'>
                                                {item.kg} kg / {item.lb} lb
                                            </td>
                                        </tr>
                                    ))}
                                </thead>
                            </table>
                            <RellaxWrapper speed='14'>
                                <img
                                    src={`/img/${rocketImages[rocketName.replace('_', ' ')]}.png`}
                                    alt='rocket'
                                    className='rocket'
                                />
                            </RellaxWrapper>
                            <article>
                                <h3 className='features-subtitle'>
                                    DESCRIPTION
                                </h3>
                                <p className='features-text'>{rocket.description}</p>
                            </article>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export { Features };
