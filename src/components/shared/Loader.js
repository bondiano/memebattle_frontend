import React from 'react';
import LoaderSVG from '../../assets/images/Pacman.svg';

class LoaderComponent extends React.PureComponent {

    render() {
        return (
            <div className="Loader">
                <img src={ LoaderSVG } className="img-responsive" alt="loader"/>
            </div>
        );
    }
}


export default LoaderComponent;
