import React, {Component} from 'react';


class SideBar extends Component {
    
  
  
  render(){
        return (
            <div className="col-md-3">
            <div className="list-group">
              <a href="/" className="list-group-item active main-color-bg">
                <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>Dashboard
              </a>
              <a href="/" className="list-group-item">Dapibus ac facilisis in</a>
              <a href="/" className="list-group-item">Morbi leo risus</a>
              <a href="/" className="list-group-item">Porta ac consectetur ac</a>
              <a href="/" className="list-group-item">Vestibulum at eros</a>
            </div>
          </div>
        )
    }
}
export default SideBar ;