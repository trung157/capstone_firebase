import React, { Component } from 'react'

class FooterComponent extends Component {
    render() {
        return (
            <div className="footer bg-white py-4 d-flex flex-lg-column" id="kt_footer" style={{"bottom":"0 !important"}}>
            <div
                className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="text-dark order-2 order-md-1">
                    <span className="text-muted font-weight-bold mr-2">2021</span>
                    <a href="!#" target="_blank"
                        className="text-dark-75 text-hover-primary">Design By Huy</a>
                </div>
                <div className="nav nav-dark">
                    <a href="!#" target="_blank"
                        className="nav-link pl-0 pr-5">About</a>
                    <a href="!#" target="_blank" className="nav-link pl-0 pr-5">Team COD</a>
                    <a href="!#" target="_blank"
                        className="nav-link pl-0 pr-0">Contact</a>
                </div>
            </div>
        </div>
        )
    }
}

export default FooterComponent