import './main.css';
import {useParams} from 'react-router-dom';

const video = {
    'Falcon 1': 'moon',
    'Falcon 9': 'earth',
    'Falcon Heavy': 'mars',
    Other: 'space',
};

const Main = props => {
    const { rocket } = props;
    const {rocketName} = useParams();
    return (
        <section className='main'>
            <h1 className='title'>{rocket ? rocket : 'SpaceX Calendar'}</h1>

            {rocketName && (
                <div className='video-container'>
                    <video
                        className='video'
                        autoPlay
                        loop
                        muted
                        src={`../video/${
                            video.hasOwnProperty(rocket)
                                ? video[rocket]
                                : video.Other
                        }.mp4`}
                    ></video>
                </div>
            )}
        </section>
    );
};

export { Main };
