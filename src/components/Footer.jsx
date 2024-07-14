import React from "react";

import linkedinIcon from "/src/assets/img/icons/linkedin-ico.png"
import githubIcon from "/src/assets/img/icons/github-ico.png"
import twitterIcon from "/src/assets/img/icons/twitter-ico.png"

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="main-container">
                <div className="main-footer__upper">
                    <div className="main-footer__row main-footer__row-1">
                        <h2 className="heading heading-sm main-footer__heading-sm">
                            <span>Social</span>
                        </h2>

                        <div className="main-footer__social-cont">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/billal-mohammad/">
                                <img className="main-footer__icon" src={linkedinIcon} alt="icon" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/bilmoh">
                                <img className="main-footer__icon" src={githubIcon} alt="icon" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://x.com/bilmoh_codes">
                                <img className="main-footer__icon" src={twitterIcon} alt="icon" />
                            </a>
                        </div>
                    </div>

                    <div className="main-footer__row main-footer__row-2">
                        <h4 className="heading heading-sm text-lt">
                            Billal Mohammad
                        </h4>
                        <p className="main-footer__short-desc">
                            Specialises in React JS and Tailwind CSS. I
                            aim to build apps that enhance users' daily lives.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}