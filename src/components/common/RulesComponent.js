import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'constants';
import Navbar from './Navbar';

class RulesComponent extends React.Component {
    render() {
        return (
            <section className="Rules">
            <Navbar username={ this.props.user.username } coins={ this.props.user.memcoin }/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="page-title">Правила</h1>
                        <p>Добро пожаловать в <b>MemBattle</b>! Готовьте свой лайки для действительно крутых мемов, 
                        и получайте море удовольствия! </p>

                        <p><i>Что же нужно делать?</i> Вы будете видеть перед собой две картинки. 
                        Нажимайте на ту, которая нравится вам больше, и торопитесь - у Вас всего 15 секунд! 
                        Если понравившася картинка набрала больше лайков от других игроков - вы победили и получаете целый мемкоин!</p>

                        <p><i>В чем же смысл?</i> Во-первых, Вы смотрите мемы, разве не круто?) 
                        Во-вторых, Вы помогаете всем выбирать лучшие. Ну а еще мемкоины можно будет обменять на что-то интересное, ждите обновлений:)</p>

                        <p>Посмотреть свое текущее положение можно во вкладке "<Link to={ routes.LIDERBOARD }>Лидеры</Link>". </p>

                        <p>С предложениями обращаться кому-нибудь из контактов в нашей группе <a href="https://vk.com/memsbattle" target='_blank'>Вконтакте</a>. </p>

                        <p style={{textAlign: "right"}}><i>С уважением, команда MemBattle.</i></p>
                    </div>
                </div>
            </div>
            </section>
        );
    }
}


export default RulesComponent;