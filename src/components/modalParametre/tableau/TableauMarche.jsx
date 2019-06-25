import React from 'react';
import { Table } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default class TableauMarche extends React.Component {
  render() {
    return (
      <Table responsive borderless hover>
        <thead>
          <tr>
            <th>Code marche</th>
            <th>Libelle marche</th>
            <th>Code agence</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <th scope="row">1</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <button
              type="button"
              className="btn btn-sm btn-primary m-2 ml-auto"
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>

            &nbsp; &nbsp; &nbsp; &nbsp;
            <button
              type="button"
              className="btn btn-sm btn-danger m-2 ml-auto"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          
          </tr>
        </tbody>
      </Table>
    );
  }
}