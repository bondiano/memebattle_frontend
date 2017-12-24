import React from 'react';
import { Switch } from 'react-router-dom';
import { routes } from '@/constants';
import MainLayoutComponent from '../common/MainLayoutComponent'
import RegisterContainer from '@/containers/RegisterContainer';
import AuthContainer from '@/containers/AuthContainer';
import LiderBoardContainer from '@/containers/LiderBoardContainer';
import ModesContainer from '@/containers/ModesContainer';
import GameRushContainer from '@/containers/GameRushContainer';
import GameTournamentContainer from '@/containers/GameTournamentContainer';
import AboutComponent from '../common/AboutComponent';
import RulesComponent from '../common/RulesComponent';
import localstorage from '@/helpers/localstorage';
import LoaderComponent from '../common/Loader';
import LogoutContainer from '@/containers/LogoutContainer';

class AppComponent extends React.Component {    
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.checkLogin();
    };

    render() {
        if (this.props.wasLogin) {
            return (
                <Switch>
                    <MainLayoutComponent leaveFromGame={ this.props.leaveFromGame } error ={ this.props.error } inGame={ this.props.inGame } user={ this.props.user } exact path={ routes.HOME } component={ ModesContainer } />
                    <MainLayoutComponent leaveFromGame={ this.props.leaveFromGame } error={ this.props.error } inGame={ this.props.inGame } user={ this.props.user } path={ routes.MODES } component={ ModesContainer }/>
                    <MainLayoutComponent leaveFromGame={ this.props.leaveFromGame } error={ this.props.error } inGame={ this.props.inGame } user={ this.props.user } path={ routes.LIDERBOARD } component={ LiderBoardContainer }/>
                    <MainLayoutComponent leaveFromGame={ this.props.leaveFromGame } error={ this.props.error } inGame={ this.props.inGame } user={ this.props.user } path={ routes.GAME_RUSH } component={ GameRushContainer }/>
                    <MainLayoutComponent leaveFromGame={ this.props.leaveFromGame } error={ this.props.error } inGame={ this.props.inGame } user={ this.props.user } path={ routes.GAME_TOURNAMENT } component={ GameTournamentContainer }/>
                    <MainLayoutComponent leaveFromGame={ this.props.leaveFromGame } error={ this.props.error } inGame={ this.props.inGame } user={ this.props.user } path={ routes.ABOUT } component={ AboutComponent }/>
                    <MainLayoutComponent leaveFromGame={ this.props.leaveFromGame } error={ this.props.error } inGame={ this.props.inGame } user={ this.props.user } path={ routes.RULES } component={ RulesComponent }/>
                    <MainLayoutComponent leaveFromGame={ this.props.leaveFromGame } error={ this.props.error } user={ this.props.user } path={ routes.LOGOUT } component={ LogoutContainer }/>            
                    <MainLayoutComponent leaveFromGame={ this.props.leaveFromGame } error={ this.props.error } inGame={ this.props.inGame } exact path={ routes.LOGIN } component={ AuthContainer }/>
                    <MainLayoutComponent leaveFromGame={ this.props.leaveFromGame } error={ this.props.error } inGame={ this.props.inGame } path={ routes.REGISTER } component={ RegisterContainer }/>
                    <MainLayoutComponent leaveFromGame={ this.props.leaveFromGame } error={ this.props.error } inGame={ this.props.inGame } user={ this.props.user } component={ ModesContainer }/>
                </Switch>
            );
        } else if (this.props.wasLogin === false) {
            return (
                <Switch>
                    <MainLayoutComponent error={ this.props.error } exact path={ routes.HOME } component={ AuthContainer }/>
                    <MainLayoutComponent error={ this.props.error } path={ routes.REGISTER } component={ RegisterContainer }/>                    
                    <MainLayoutComponent error={ this.props.error } component={ AuthContainer }/>            
                </Switch>
            ); 
        } else {
            return (
                <LoaderComponent/>
            );
        }
    }
}


export default AppComponent;
