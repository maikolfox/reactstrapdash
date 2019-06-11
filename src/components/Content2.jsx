import React, {Component} from 'react';

class Content extends Component {
    render(){
        return (
            <div class="col-md-9">
                <div class="panel panel-default">
                  <div class="panel-heading ">
                    <h3 class="panel-title">{this.props.panelTitle}</h3>
                  </div>
                  <div class="panel-body">
                  cool boys dont lies
                  </div>
                </div>
              </div>
        )
    }
}
export default Content