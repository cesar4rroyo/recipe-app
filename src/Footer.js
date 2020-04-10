import React from "react";
import "./App.css";

const Footer = () => {
    return (
        <footer className="page-footer font-small special-color-dark pt-4">
            <div className="container">
                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <a
                            className="btn-floating btn-fb mx-1"
                            href="https://www.facebook.com/cesar4rroyo"
                        >
                            <i className="fab fa-facebook-f"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a
                            className="btn-floating btn-tw mx-1"
                            href="https://twitter.com/cesar4rroyo"
                        >
                            <i className="fab fa-twitter"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a
                            className="btn-floating btn-gplus mx-1"
                            href="https://github.com/cesar4rroyo"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a
                            className="btn-floating btn-li mx-1"
                            href="https://www.linkedin.com/in/c%C3%A9sar-arroyo-torres-062283192/"
                        >
                            <i className="fab fa-linkedin-in"> </i>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="footer-copyright text-center py-3">
                © 2020 Copyright:
                <a href="https://github.com/cesar4rroyo"> cesar4rroyo</a>
            </div>
        </footer>
    );
};
export default Footer;
