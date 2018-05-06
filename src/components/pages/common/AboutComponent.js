import React from 'react';
import Navbar from '@/components/shared/Navbar';

class AboutComponent extends React.Component {
    render() {
        return (
            <section className="Rules">
                <Navbar username={ this.props.user.username } coins={ this.props.user.memcoin }/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="page-title">О нас</h1>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default AboutComponent;
