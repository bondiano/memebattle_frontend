import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from '../../constants';
import MainLayoutComponent from '../common/MainLayoutComponent'
import RegisterContainer from '../../containers/RegisterContainer';
import AuthContainer from '../../containers/AuthContainer';
import LiderBoardContainer from '../../containers/LiderBoardContainer';
import ModesContainer from '../../containers/ModesContainer';
import GameRushContainer from '../../containers/GameRushContainer';
import GameTournamentContainer from '../../containers/GameTournamentContainer';

class AppComponent extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <MainLayoutComponent exact path={routes.ROOT} component={AuthContainer} />
                    <MainLayoutComponent path={routes.REGISTER} component={RegisterContainer}/>
                    <MainLayoutComponent path={routes.MODES} component={ModesContainer}/>
                    <MainLayoutComponent path={routes.LIDERBOARD} component={LiderBoardContainer}/>
                    <MainLayoutComponent path={routes.GAME_RUSH} component={GameRushContainer}/>
                    <MainLayoutComponent path={routes.GAME_TOURNAMENT} component={GameTournamentContainer}/>
                </Switch>
            </Router>
        );
    }
}


export default AppComponent;
