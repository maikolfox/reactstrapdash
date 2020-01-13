import React from 'react';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import ConfigUrl from "../../asset/ConfigUrl"


export default class TableTache extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded:false,
      response:[]
    }}

  async componentDidMount()
  {await fetch(ConfigUrl.basePath+"/getProcessus",
  {
    method: 'GET',
    headers:
    {
      'Content-Type': 'application/json',
    }
  }) 
.then(res => res.json())
    .then(reponse=>{
      console.log(reponse)
      this.setState({ response: reponse.data,loaded:false });

  }).catch(error => {
    this.setState({ loaded:false });
})

}

  render() {

    const table=this.state.response.map((element,index)=>(
      
      <tr>
            <th scope="row">{index+1}</th>
            <td>{element.codeProcessus}</td>
            <td>{element.libelleProcessus}</td>
          
            &nbsp; &nbsp;&nbsp; &nbsp;
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
    ))
    return (
      <Table responsive borderless hover>
        <thead>
          <tr>
            <th>Code processus</th>
            <th>Libelle processus</th>
            <th>Temps unitaire</th>
            <th>Modifier/Supprimer</th>
            <th><i class="fa fa-pencil" aria-hidden="true"></i></th>
          </tr>
        </thead>
        <tbody>
         
            {table}
        </tbody>
      </Table>
    );
  }
}