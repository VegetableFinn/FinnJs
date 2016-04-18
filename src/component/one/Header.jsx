import './Header.less';

import React from 'react';
import { Row, Col } from 'antd' ;

const Header = React.createClass({
    getInitialState() {
        return null;
    },

    render() {
        return (
            <div className="header">
                <Row className="header-row">
                    <Col span="4">
                        <div className="header-logo">
                            <a href="#">FinnAndTheWorld</a>
                        </div>
                    </Col>
                    <Col span="16">
                        <div className="hrefList">
                            <Col span="3"></Col>
                        </div>
                    </Col>
                    <Col span="4">
                        <div className="welcomeDiv">
                            <span></span>
                        </div>
                    </Col>
                </Row>
            </div>);
    },
});

export default Header;
