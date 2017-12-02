import React from 'react';
import { Switch } from 'react-router-dom';
import { routes } from '../../constants';
import MainLayoutComponent from '../common/MainLayoutComponent'
import RegisterContainer from '../../containers/RegisterContainer';
import AuthContainer from '../../containers/AuthContainer';
import LiderBoardContainer from '../../containers/LiderBoardContainer';
import ModesContainer from '../../containers/ModesContainer';
import GameRushContainer from '../../containers/GameRushContainer';
import GameTournamentContainer from '../../containers/GameTournamentContainer';
import AboutComponent from '../common/AboutComponent';
import RulesComponent from '../common/RulesComponent';

const checkAuth = () => {

};

const wasLogin = () => {
    return true;
};

class AppComponent extends React.Component {
    render() {
        return (
            <Switch>
                {wasLogin() ? 
                    <MainLayoutComponent user={ this.props.user } exact path={routes.HOME} component={ModesContainer} /> :
                    <MainLayoutComponent exact path={ routes.HOME } component={AuthContainer}/>
                }
                <MainLayoutComponent exact path={routes.LOGIN} component={AuthContainer}/>
                <MainLayoutComponent path={routes.REGISTER} component={RegisterContainer}/>
                <MainLayoutComponent user={ this.props.user } path={routes.MODES} component={ModesContainer}/>
                <MainLayoutComponent user={ this.props.user } path={routes.LIDERBOARD} component={LiderBoardContainer}/>
                <MainLayoutComponent user={ this.props.user } path={routes.GAME_RUSH} component={GameRushContainer}/>
                <MainLayoutComponent user={ this.props.user } path={routes.GAME_TOURNAMENT} component={GameTournamentContainer}/>
                <MainLayoutComponent user={ this.props.user } path={routes.ABOUT} component={AboutComponent}/>
                <MainLayoutComponent user={ this.props.user } path={routes.RULES} component={RulesComponent}/>
            </Switch>
        );
    }
}


export default AppComponent;
