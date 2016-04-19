import './Header.less';

import React from 'react';
import { Row, Col, Input } from 'antd' ;

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
                    <Col span="20">
                        <div>
                            <Input id="largeInput" size="large" placeholder="如果。你想说点什么。" />
                        </div>
                    </Col>
                    
                </Row>
            </div>);
    },
});

export default Header;
