import React, {Component} from "react";

class InfosPage extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        const {renderInfos} = this.props;
        const renderCensus =renderInfos.map(info => {
            return (
                <tr key={info.personid}>
                    <td> {info.personid} </td>
                    <td> {info.age} </td>
                    <td> {info.birthcountry} </td>
                    <td> {info.sex} </td>
                    <td> {info.mace} </td>
                    <td> {info.citizenship} </td>
                    <td> {info.education} </td>
                    <td> {info.maritalstatus} </td>
                    <td> {info.salaryrange} </td>
                </tr>

            );
  });
  
        return(
            <div>
                <table className="table mt-3">
				          <thead className="table-dark">
				            <tr>
				              <th>id</th>
				              <th>Age</th>
				              <th>Birth Country</th>
							  <th>Sex</th>
				              <th>Mace</th>
				              <th>Citizenship</th>
				              <th>education</th>
				              <th>marital status</th>
							  <th>Salary range</th>
				            </tr>
				          </thead>
				          <tbody>
                            {renderCensus}
				          </tbody>
				        </table>
                    
            </div>
        )
    }
}
export default InfosPage;