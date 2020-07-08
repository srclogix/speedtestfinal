import React from 'react'
import { Modalitem } from './Modalitem'
import { ReactComponent as RefreshPlay } from './assets/img/svg/refreshplay.svg'
import { ReactComponent as DownloadIco } from './assets/img/svg/downloadico.svg'
import { ReactComponent as UploadIco } from './assets/img/svg/uploadico.svg'
import { ReactComponent as QuantityIco } from './assets/img/svg/quantityico.svg'
import { ReactComponent as SourceIco } from './assets/img/svg/sourceico.svg'

export default class Homepage extends React.Component {
    state = {
        isPlayed: false,
    }
   
      handleClick() {
        window.startStop();
      }
      
    render() {
        return (
            <section className="c-main-wr">
                <div className="c-main-con">
                    <div className="row">
                        <div className=" c-main-box2">
                            <div className="c-main-box-img">
                                <picture>
                                    <source srcSet={require("./assets/img/banner-img.webp")} type="image/webp" alt="" />
                                    <source srcSet={require("./assets/img/banner-img.jpg")} type="image/jpg" alt="" />
                                    <img src={require("./assets/img/banner-img.jpg")} alt="" /> </picture>
                            </div>
                        </div>

                        <div className=" c-main-box1">
                            <div className="c-speedtest-main">
                                <div className="c-speed-main">
                                    <div className="c-speedtest-heading">
                                        <h3>Speed &amp; Quality tester</h3>
                                        <div onClick={this.handleClick}  className="c-refrash-icon-new">

                                            <div className="c-refrash-icon-in">
                                                <span className="c-refrash-play">
                                                    <RefreshPlay />
                                                </span>
                                                <div className="c-wave-wr">
                                                    <div className="wave" />
                                                    <div className="wave" />
                                                </div>
                                                <span className="c-refrash-push">
                                                </span></div>
                                        </div>
                                    </div>

                                    <div className="c-speed-headeing">
                                        <h4> Download <dfn> Mb/s </dfn><span>
                                            <DownloadIco />
                                        </span></h4>
                                        <h1><span id="dlText"></span></h1>
                                    </div>

                                </div>
                                <div className="c-latency-main">
                                    <div className="c-speed-box c-upload-box">
                                        <h4> Upload <dfn>Mb/s</dfn> <span>
                                            <UploadIco />
                                        </span> </h4>
                                        <ul>
                                            <li>
                                                {/*<h3>Speed</h3>*/}
                                                <h5><span id="ulText"></span></h5>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="c-speed-box">
                                        <h4> Quality <span>
                                            <QuantityIco />
                                        </span> </h4>
                                        <ul>
                                            <li>
                                                <h3>Ping <small>( Ms )</small></h3>
                                                <h5><span id="pingText"></span></h5>
                                            </li>
                                            <li>
                                                <h3>Jitter <small>( Ms )</small></h3>
                                                <h5><span id="jitText"></span></h5>
                                            </li>
                                            <li>
                                                <h3> Buffer <small>( Grade )</small></h3>
                                                <h5><span>--</span></h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="c-info-box">
                                    <h4> <span>
                                        <SourceIco />
                                    </span> Source </h4>
                                    <ul className="c-client-speed">
                                        <li> <dfn>Client Location: </dfn> <b id="locat"></b></li>
                                        <li> <dfn>IP: </dfn><b id="ip"></b></li>
                                        <li> <dfn>ISP:</dfn>  Cox Communication </li>
                                    </ul>
                                    <hr />
                                    <ul>
                                        <li> <dfn>Server Location: </dfn> <b id="server"></b></li>
                                        <li><dfn>Distance from Client:</dfn> <b>1028 Miles</b></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
                <Modalitem />
            </section >
        );
    }
}
