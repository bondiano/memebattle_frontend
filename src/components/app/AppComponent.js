import React from 'react';
import { Switch } from 'react-router-dom';
import { Routes } from 'constants.js';
import MainLayoutComponent from 'components/shared/MainLayoutComponent';
import RegisterContainer from 'containers/RegisterContainer';
import AuthContainer from 'containers/AuthContainer';
import LiderBoardContainer from 'containers/LiderBoardContainer';
import ModesContainer from 'containers/ModesContainer';
import {
    GameRushContainer,
    GameToGameTournamentContainer
} from 'containers/games';
import AboutComponent from 'components/shared/AboutComponent';
import RulesComponent from 'components/shared/RulesComponent';
import LoaderComponent from 'components/shared/Loader';
import LogoutContainer from 'containers/LogoutContainer';

class AppComponent extends React.Component {
    componentDidMount() {
        this.props.checkLogin();
    }

    render() {
        switch(this.props.wasLogin){
            case null:
                return (
                    <LoaderComponent/>
                );
            case false:
                return (
                    <Switch>
                        <MainLayoutComponent appError={ this.props.appError } exact path={ Routes.HOME } component={ AuthContainer }/>
                        <MainLayoutComponent appError={ this.props.appError } path={ Routes.REGISTER } component={ RegisterContainer }/>
                    </Switch>
                );
            case true:
                return (
                    <Switch>
                        <MainLayoutComponent
                            path={ Routes.HOME }
                            exact component={ ModesContainer }
                        />
                        <MainLayoutComponent
                            path={ Routes.MODES }
                            component={ ModesContainer }
                        />
                        <MainLayoutComponent
                            path={ Routes.LEADER_BOARD }
                            component={ LiderBoardContainer }
                        />
                        <MainLayoutComponent
                            path={ Routes.GAME_RUSH }
                            component={ GameRushContainer }
                        />
                        <MainLayoutComponent
                            path={ Routes.GAME_TOURNAMENT }
                            component={ GameTournamentContainer }
                        />
                        <MainLayoutComponent
                            path={ Routes.ABOUT }
                            component={ AboutComponent }
                        />
                        <MainLayoutComponent
                            path={ Routes.RULES }
                            component={ RulesComponent }
                        />
                        <MainLayoutComponent
                            path={ Routes.LOGOUT }
                            component={ LogoutContainer }
                        />
                        <MainLayoutComponent
                            path={ Routes.LOGIN }
                            exact component={ AuthContainer }
                        />
                        <MainLayoutComponent
                            path={ Routes.REGISTER }
                            component={ RegisterContainer }
                        />
                        {/*<MainLayoutComponent component={ ModesContainer }/>*/}
                    </Switch>
                );
        }
    }
}


export default AppComponent;
