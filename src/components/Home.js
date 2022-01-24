import React from 'react';
import Slider from './slider/Index';
import { ReactComponent as ValueIcon } from '../assets/value.svg';
import { ReactComponent as SeamlessIcon } from '../assets/seamless.svg';
import { ReactComponent as SafeIcon } from '../assets/safe.svg';
import { ReactComponent as DeliveryIcon } from '../assets/delivery.svg';

const Home = () => {
    return (
        <>
            <div className="main-wrap">
                <Slider />
                <section className="container more-for-you mt-3 d-none d-sm-block">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="p-3 bg-white shadow-sm">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="d-flex justify-content-lg-between">
                                            <div className='pe-3'>
                                                <ValueIcon />
                                            </div>
                                            <div>
                                                <h6 className="bolder font-14 mb-1">Great value items</h6>
                                                <p className="font-10 m-0">
                                                    Most extensive sale of retail brand, covering hundreds of household
                                                    consumable items.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="d-flex justify-content-lg-between">
                                            <div className='pe-3'>
                                                <SeamlessIcon />
                                            </div>
                                            <div>
                                                <h6 className="bolder font-14 mb-1">Seamless shopping</h6>
                                                <p className="font-10 m-0">
                                                    We offer wide range of products that fits every type of personality
                                                    and shopping taste.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="d-flex justify-content-lg-between">
                                            <div className='pe-3'>
                                                <SafeIcon />
                                            </div>
                                            <div>
                                                <h6 className="bolder font-14 mb-1">Secure payment</h6>
                                                <p className="font-10 m-0">
                                                    When you make payment with any available pay option, you can be rest
                                                    assured about your security.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="d-flex justify-content-lg-between">
                                            <div className='pe-3'>
                                                <DeliveryIcon />
                                            </div>
                                            <div>
                                                <h6 className="bolder font-14 mb-1">Nationwide delivery</h6>
                                                <p className="font-10 m-0">
                                                    We offer fast and effective delivery to every location in Nigeria
                                                    within 2-3 working days.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
