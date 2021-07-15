import React, {Component}  from "react";
import AgeBarChart from '../components/dashboardcomponent/AgeBarChart';
import MacePieChart from "../components/dashboardcomponent/MacePieChart";
import SalaryRangeChar from "../components/dashboardcomponent/SalaryRangeChar";


class DashboardPage extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    

    render(){
        

        return(
            <div>
               <AgeBarChart/>
               <MacePieChart/>
               <SalaryRangeChar/>
            </div>
            )
    }
}

export default DashboardPage;