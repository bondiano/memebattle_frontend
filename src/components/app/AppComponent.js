import React from 'react';
import { Switch } from 'react-router-dom';
import { routes } from 'constants.js';
import MainLayoutComponent from 'components/common/MainLayoutComponent';
import RegisterContainer from 'containers/RegisterContainer';
import AuthContainer from 'containers/AuthContainer';
import LiderBoardContainer from 'containers/LiderBoardContainer';
import ModesContainer from 'containers/ModesContainer';
import GameRushContainer from 'containers/Games/GameRushContainer';
import GameTournamentContainer from 'containers/Games/GameTournamentContainer';
import AboutComponent from 'components/common/AboutComponent';
import RulesComponent from 'components/common/RulesComponent';
import LoaderComponent from 'components/common/Loader';
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
                        <MainLayoutComponent appError={ this.props.appError } exact path={ routes.HOME } component={ AuthContainer }/>
                        <MainLayoutComponent appError={ this.props.appError } path={ routes.REGISTER } component={ RegisterContainer }/>
                    </Switch>
                );
            case true:
                return (
                    <Switch>
                        <MainLayoutComponent
                            path={ routes.HOME }
                            exact component={ ModesContainer }
                        />
                        <MainLayoutComponent
                            path={ routes.MODES }
                            component={ ModesContainer }
                        />
                        <MainLayoutComponent
                            path={ routes.LIDERBOARD }
                            component={ LiderBoardContainer }
                        />
                        <MainLayoutComponent
                            path={ routes.GAME_RUSH }
                            component={ GameRushContainer }
                        />
                        <MainLayoutComponent
                            path={ routes.GAME_TOURNAMENT }
                            component={ GameTournamentContainer }
                        />
                        <MainLayoutComponent
                            path={ routes.ABOUT }
                            component={ AboutComponent }
                        />
                        <MainLayoutComponent
                            path={ routes.RULES }
                            component={ RulesComponent }
                        />
                        <MainLayoutComponent
                            path={ routes.LOGOUT }
                            component={ LogoutContainer }
                        />
                        <MainLayoutComponent
                            path={ routes.LOGIN }
                            exact component={ AuthContainer }
                        />
                        <MainLayoutComponent
                            path={ routes.REGISTER }
                            component={ RegisterContainer }
                        />
                        {/*<MainLayoutComponent component={ ModesContainer }/>*/}
                    </Switch>
                );
        }
    }
}


export default AppComponent;
