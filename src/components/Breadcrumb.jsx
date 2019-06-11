
import React, { Component } from 'react';

class FilDariane extends Component {

    render() {
        return (

            <section id="breadcrumb">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="active">Home >{this.props.location}</li>
                    </ol>
                </div>
            </section>

        );
    }
}

export default FilDariane;