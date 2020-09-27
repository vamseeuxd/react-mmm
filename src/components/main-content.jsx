import React, {useState} from "react";
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import classnames from 'classnames';

export const MainContent = () => {

    const [activeTab, setActiveTab] = useState('1');
    const [incomeList, setIncomeList] = useState([]);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs>
                <NavItem><NavLink className={classnames({active: activeTab === '1'})} onClick={() => {
                    toggle('1');
                }}>Income</NavLink></NavItem>
                <NavItem><NavLink className={classnames({active: activeTab === '2'})} onClick={() => {
                    toggle('2');
                }}>Expenses</NavLink></NavItem>
                <NavItem><NavLink className={classnames({active: activeTab === '3'})} onClick={() => {
                    toggle('3');
                }}>Saving</NavLink></NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1" className={'p-3'}>
                    <Row>
                        <Col sm="12">
                            <h4>Income List for January</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Recipient's username"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add Income</button>
                                            </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Cras justo odio
                                            <div>
                                                <button className="btn btn-danger mr-3"><i className="fa fa-trash"></i></button>
                                                <button className="btn btn-warning"><i className="fa fa-edit"></i></button>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2" className={'p-3'}>
                    <Row>
                        <Col sm="12">
                            <h4>Expenses List for January</h4>
                            <ul className="list-group">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Morbi leo risus</li>
                                <li className="list-group-item">Porta ac consectetur ac</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3" className={'p-3'}>
                    <Row>
                        <Col sm="12">
                            <h4>Saving List for January</h4>
                            <ul className="list-group">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Morbi leo risus</li>
                                <li className="list-group-item">Porta ac consectetur ac</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
)
}