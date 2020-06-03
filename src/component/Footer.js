import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div>
               
    <footer className="footer-content">
        <div className="layer footer">
            <div className="container-fluid">
                <div className="row footer-top-inner-w3ls">
                    <div className="col-lg-4 col-md-6 footer-top ">
                        <h2>
                            <Link to="/index">Men spa</Link>
                        </h2>
                        <p className="my-3">Donec consequat sam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus</p>
                        <p>
                            Id quod possimusapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus at, semper varius orci.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                        <div className="footer-w3pvt">
                            <h3 className="mb-3 w3pvt_title">Opening Hours</h3>
                            <hr />
                            <ul className="list-info-w3pvt last-w3ls-contact mt-lg-4">
                                <li>
                                    <p> Monday - Friday 08.00 am - 10.00 pm</p>

                                </li>
                                <li className="my-2">
                                    <p>Saturday 08.00 am - 10.00 pm</p>

                                </li>
                                <li className="my-2">
                                    <p>Sunday 08.00 am - 10.00 pm</p>

                                </li>


                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                        <div className="footer-w3pvt">
                            <h3 className="mb-3 w3pvt_title">Contact Us</h3>
                            <hr />
                            <div className="last-w3ls-contact">
                                <p>
                                    <Link to="/mailto:example@email.com">info@example.com</Link>
                                </p>
                            </div>
                            <div className="last-w3ls-contact my-2">
                                <p>+ 456 123 7890</p>
                            </div>
                            <div className="last-w3ls-contact">
                                <p>+ 90 nsequursu dsdesdc,
                                    <br />xxx Honey State 049436.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <p className="copy-right-grids text-li text-center my-sm-4 my-4">© 2019 Men spa. All Rights Reserved | Design by
                    <Link to="/http://w3layouts.com/"> W3layouts </Link>
                </p>
                <div className="w3ls-footer text-center mt-4">
                    <ul className="list-unstyled w3ls-icons">
                        <li>
                            <Link to="/#">
							<span className="fa fa-facebook-f"></span>
						</Link>
                        </li>
                        <li>
                            <Link to="/#">
							<span className="fa fa-twitter"></span>
						</Link>
                        </li>
                        <li>
                            <Link to="/#">
							<span className="fa fa-dribbble"></span>
						</Link>
                        </li>
                        <li>
                            <Link to="/#">
							<span className="fa fa-vk"></span>
						</Link>
                        </li>
                    </ul>
                </div>
                <div className="move-top text-right"><Link to="/#home" className="move-top"> <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span></Link></div>
            </div>
            {/* <!-- //footer bottom --> */}
        </div>
    </footer>
            </div>
        )
    }
}

export default Footer;