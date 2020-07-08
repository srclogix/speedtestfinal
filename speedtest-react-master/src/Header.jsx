import React from 'react'
import { Link } from 'react-router-dom'

import "./assets/css/custom.css"
import './assets/css/dark.css'
import './assets/css/resposive.css'

import { ReactComponent as ReactLogo } from './assets/img/svg/logo.svg'
import { ReactComponent as SettingGear } from './assets/img/svg/settingsgear.svg'

export const Header = () => {
    return (

        <header className="c-header-wr">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="c-logo-wr">
                            <Link to="/">
                                <ReactLogo />
                            </Link>
                            <span>
                                <picture>
                                    <source srcSet={require("./assets/img/header-bg.webp")} type="image/webp" alt="" />
                                    <source srcSet={require("./assets/img/header-bg.jpg")} type="image/jpg" alt="" />
                                    <img src={require("./assets/img/header-bg.jpg")} alt="" /> </picture>
                            </span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="c-setting-wr d-flex justify-content-end">
                            <div data-toggle="modal" data-target=".c-setting-modal">
                                <SettingGear />
                            </div>
                            <span>
                                <picture>
                                    <source srcSet={require("./assets/img/setting-bg.webp")} type="image/webp" alt="" />
                                    <source srcSet={require("./assets/img/setting-bg.jpg")} type="image/jpg" alt="" />
                                    <img src={require("./assets/img/setting-bg.jpg")} alt="" /> </picture>
                            </span> </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
