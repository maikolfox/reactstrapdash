import React, { Component } from 'react';


class MainHeader extends Component {
    render() {
        return (
            <header id="header">
                
                <a class="col-md-3 col-sm-12 col-xs-12" href="#"><img src="./image/logoBridgeBank.png" alt="BBG" /></a>       
                <div className="container">
                    <div className="row">
                        <div class="col-md-9 col-sm-12 col-xs-12">
                            <h1><span className="glyphicon glyphicon-stats" aria-hidden="true"></span> Dashboard EFFOP<small> outil de mesure de l'efficacite operationnelle</small></h1>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default MainHeader;