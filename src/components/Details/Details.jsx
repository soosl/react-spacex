import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useLaunches } from '../Hooks/useLaunches';
import Youtube from 'react-youtube';
import { Main } from '../Main/Main';
import './details.css';

const Details = () => {
    const { goBack } = useHistory();
    const { id } = useParams();
    const [launch, setLaunch] = useState(null);
    const { getLaunch } = useLaunches();
    useEffect(() => {
        setLaunch(getLaunch(id));
    }, [getLaunch, id]);
    return (
        <>
            {launch && (
                <>
                    <Main rocket={launch.name} />
                    <section className='details'>
                        <div className='container'>
                            <div className='details-row'>
                                <div className='details-image'>
                                    <img
                                        src={launch.links.patch.small}
                                        alt={launch.name}
                                    />
                                </div>
                                <div className='details-content'>
                                    <p className='details-description'>
                                        {launch.details}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <Youtube className='details-youtube' videoId={launch.links.youtube_id}/>
                                {/* <iframe
                                    className='details-youtube'
                                    width='560'
                                    height='315'
                                    src={`https://www.youtube.com/embed/${launch.links.youtube_id}`}
                                    frameBorder='0'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                    title='details'
                                /> */}
                            </div>
                        </div>
                        <a
                            onClick={e => {
                                e.preventDefault();
                                goBack();
                            }}
                            href='#!'
                            className='button button-back'
                        >
                            go back
                        </a>
                    </section>
                </>
            )}
        </>
    );
};

export { Details };
