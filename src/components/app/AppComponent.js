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


class AppComponent extends React.Component {
    render() {
        return (
            <Switch>
                <MainLayoutComponent exact path={routes.LOGIN} component={AuthContainer} />
                <MainLayoutComponent path={routes.REGISTER} component={RegisterContainer}/>
                <MainLayoutComponent coins={ this.props.user.memcoin } username={ this.props.user.username } exact path={routes.HOME} component={ModesContainer} />
                <MainLayoutComponent coins={ this.props.user.memcoin } username={ this.props.user.username } path={routes.MODES} component={ModesContainer}/>
                <MainLayoutComponent coins={ this.props.user.memcoin } username={ this.props.user.username } path={routes.LIDERBOARD} component={LiderBoardContainer}/>
                <MainLayoutComponent coins={ this.props.user.memcoin } username={ this.props.user.username } path={routes.GAME_RUSH} component={GameRushContainer}/>
                <MainLayoutComponent coins={ this.props.user.memcoin } username={ this.props.user.username } path={routes.GAME_TOURNAMENT} component={GameTournamentContainer}/>
                <MainLayoutComponent coins={ this.props.user.memcoin } username={ this.props.user.username } path={routes.ABOUT} component={AboutComponent}/>
                <MainLayoutComponent coins={ this.props.user.memcoin } username={ this.props.user.username } path={routes.RULES} component={RulesComponent}/>
            </Switch>
        );
    }
}


export default AppComponent;
