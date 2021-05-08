import { Link } from 'react-router-dom';
import { Main } from '../Main/Main';
import { useLaunches } from '../Hooks/useLaunches';
import './calendar.css';

const Calendar = () => {
    const { launches } = useLaunches();
    return (
        <>
            <Main name='SpaceX Calendar'/>
            <section className='calendar'>
                <div className='container'>
                    {!launches.length ? null : (
                        <ul className='calendar-list'>
                            {launches.map(item => (
                                <li className='calendar-item' key={item.id}>
                                    <article className='launches'>
                                        <div className='launches-image'>
                                            <img
                                                src={item.links.patch.small}
                                                alt=''
                                            />
                                            {/* <a
                                                className='launches-youtube'
                                                href='https://www.youtube.com/watch?v=dLQ2tZEH6G0'
                                            ></a> */}
                                        </div>
                                        <div className='launches-content'>
                                            <h2 className='launches-title'>
                                                {item.name}
                                            </h2>
                                            <Link
                                                to={`/details/${item.id}`}
                                                className='button launches-details'
                                            >
                                                Details
                                            </Link>
                                        </div>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
        </>
    );
};

export { Calendar };
