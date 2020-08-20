import React, { Component } from 'react';

// IMPORTING CUSTOM CSS
import './modules.css';

// IMPORTING REACT ICONS
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdAccessTime } from 'react-icons/md';

// IMPORTING IMAGE
import Group from '../Images/Group.png';

export default class Modules extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: '',
            messageArray: [],
            data: []
        }
    }

    handleMessageChange = e => {
        this.setState({
            message: e.target.value
        })
    }

    submitMessage = e => {
        e.preventDefault()
        //    SAVING THE INPUT MESSAGE TO THE LOCAL STORAGE UPON SUBMIT
        this.setState(prevState => ({
            data: [this.state.message, ...prevState.data]
        }))
        console.log(this.state.data);
        localStorage.setItem('modules', this.state.data);
    }



    render() {
        const { messageArray } = this.state
        console.log(messageArray);
        return (
            <div className='pt-3'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-3" >
                            <div className="d-flex justify-content-between">
                                <p className='font-weight-bold heady'>Backlog</p>
                                <FiMoreHorizontal className='pt-1' style={{ fontSize: '25px' }} />
                            </div>
                            <div className='mb-2'>
                                <button onClick={this.submitMessage} className='btn bot font-weight-bold btn-block' type="submit">+</button>
                            </div>
                            <textarea name="" value={this.state.message} onChange={this.handleMessageChange} className='form-control' id="" cols="30" rows="3"></textarea>

                            {/* I'LL RENDER CARDS HERE */}

                            {
                                <div className="card mt-2">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <p className='info text-left'> </p>
                                            <FiMoreHorizontal className='' style={{ fontSize: '25px' }} />
                                        </div>
                                        <div className="">
                                            <p className='d-inline pr-5 mr-5'> <MdAccessTime /> <span className='time'>Due Aug 8</span> </p>
                                            <img src={Group} alt="group" className='img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            }


                            <div className="card mt-2">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className='info text-left'>Apply gredient colours <br /> on the dashboard sidenav</p>
                                        <FiMoreHorizontal className='' style={{ fontSize: '25px' }} />
                                    </div>
                                    <div className="">
                                        <p className='d-inline pr-5 mr-5'> <MdAccessTime /> <span className='time'>Due Aug 8</span> </p>
                                        <img src={Group} alt="group" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className='info text-left'>Apply gredient colours <br /> on the dashboard sidenav</p>
                                        <FiMoreHorizontal className='' style={{ fontSize: '25px' }} />
                                    </div>
                                    <div className="">
                                        <p className='d-inline pr-5 mr-5'> <MdAccessTime /> <span className='time'>Due Aug 8</span> </p>
                                        <img src={Group} alt="group" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 small-move">
                            <div className="d-flex justify-content-between">
                                <p className='font-weight-bold heady'>Todo</p>
                                <FiMoreHorizontal className='pt-1' style={{ fontSize: '25px' }} />
                            </div>
                            <div className='mb-2'>
                                <button className='btn bot font-weight-bold btn-block' type="submit">+</button>
                            </div>
                        </div>


                        <div className="col-md-3 small-move">
                            <div className="d-flex justify-content-between">
                                <p className='font-weight-bold heady'>In progress</p>
                                <FiMoreHorizontal className='pt-1' style={{ fontSize: '25px' }} />
                            </div>
                            <div className='mb-2'>
                                <button className='btn bot font-weight-bold btn-block' type="submit">+</button>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="d-flex justify-content-between">
                                <p className='font-weight-bold heady'>In Review</p>
                                <FiMoreHorizontal className='pt-1' style={{ fontSize: '25px' }} />
                            </div>
                            <div className='mb-2'>
                                <button className='btn bot font-weight-bold btn-block' type="submit">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
