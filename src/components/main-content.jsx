import React, {useReducer, useState} from "react";
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import {incomeReducer} from '../reducers/income-reducer';

export const MainContent = () => {

    const [activeTab, setActiveTab] = useState('1');
    const [incomeList, dispatchIncome] = useReducer(incomeReducer, []);
    const [incomeName, setIncomeName] = useState('');
    const [incomeAmount, setIncomeAmount] = useState('');
    const [incomeStartDate, setIncomeStartDate] = useState(null);
    const [incomeEndDate, setIncomeEndDate] = useState(null);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const addNewIncome = () => {
        if (incomeName &&
            incomeAmount &&
            incomeStartDate &&
            incomeEndDate) {
            const data = {
                name: incomeName,
                amount: incomeAmount,
                startDate: incomeStartDate,
                endDate: incomeEndDate,
                id: new Date().getTime().toString()
            };
            dispatchIncome({type: 'ADD_INCOME', data: data})
        }
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
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Income Name</label>
                                            <input onChange={e => setIncomeName(e.target.value)} type="text"
                                                   className="form-control"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Income Amount</label>
                                            <input type="number" onChange={e => setIncomeAmount(e.target.value)}
                                                   className="form-control"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Income Start Data</label>
                                            <input type="date" onChange={e => setIncomeStartDate(e.target.value)}
                                                   className="form-control"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Income End Date</label>
                                            <input type="date" onChange={e => setIncomeEndDate(e.target.value)}
                                                   className="form-control"/>
                                        </div>
                                        <div className="form-group col-md-12 text-right">
                                            <button onClick={() => addNewIncome()} className="btn btn-outline-secondary"
                                                    type="button">Add Income
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <ul className="list-group">
                                        {
                                            incomeList.map(
                                                income => {
                                                    return (
                                                        <li key={income.id} className="list-group-item d-flex justify-content-between align-items-center">
                                                            <h5 className="mb-1">{income.name} : {income.amount}$</h5>
                                                            <h6 className="mb-1">from {income.startDate} - to {income.endDate}</h6>
                                                            <div>
                                                                <button className="btn btn-danger mr-3">
                                                                    <i className="fa fa-trash"></i>
                                                                </button>
                                                                <button className="btn btn-warning">
                                                                    <i className="fa fa-edit"></i>
                                                                </button>
                                                            </div>
                                                        </li>

                                                    )
                                                })
                                        }
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