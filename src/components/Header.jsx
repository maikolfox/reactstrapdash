import React, {Component} from 'react';

class Header extends Component {
    render(){
        return (
            <header id="header">
            <div class="container">
              <div class="row">
                <div class="col-md-10">
                  <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span>Dashboard EFFOP <small> outil de mesure de l'efficacite operationnelle</small></h1>
                </div>
                <div class="col-md-2">
                  <div class="dropdown create">
                    {/* <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="true">
                      Adds
                      <span class="caret"></span>
                    </button> */}
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>
        )
    }
}
export default Header