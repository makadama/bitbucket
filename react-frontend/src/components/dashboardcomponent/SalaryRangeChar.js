import React, {Component} from "react";
import { Chart } from "react-google-charts";
import { connect } from "react-redux";
import { fetchInfos } from '../../actions/uscensuslearnActions';

class  SalaryRangeChart extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    componentDidMount(){
		
		this.props.fetchInfos()
		
	}
    render(){
        const {infos} = this.props.infos;
        var maleMore = 0;
        var maleLess = 0;
        var femaleMore = 0;
        var femaleLess = 0;


        for(var i =0; i<infos.length; i++){
            if(infos[i].salaryrange === "- 50000." && infos[i].sex === "Male" ){
                maleLess += 1
            }
            else if(infos[i].salaryrange === "50000+." && infos[i].sex === "Male" ) {
                maleMore += 1;
            }
            else if(infos[i].salaryrange === "- 50000." && infos[i].sex === "Female" ) {
                femaleLess += 1;
            }
            else{
                femaleMore += 1;
            }
        }

        
        var salaryData = [['Sex', '- 50000', '50000+'], ['Male', maleLess, maleMore], ['Female', femaleLess, femaleMore]  ]

        return(
            <div className='justify-content-center'>
                <div className="card mt-3">
                        <div className="card-body"> 
                        <Chart
								  height={'150px'}
								  chartType="BarChart"
								  loader={<div>Loading Chart</div>}
								  data={salaryData}
								  options={{
								    title: 'vizualise salary among sex',
								    chartArea: { width: '50%' },
								    hAxis: {
								      title: 'Salary',
								      minValue: 0,
								    },
								    vAxis: {
								      title: 'Sex',
								    },
								  }}
								  // For tests
								  rootProps={{ 'data-testid': '' }}
								/>
                        </div>
                    </div>
            </div>
        )
    }

}const mapStateToProps = state => ({
    infos : state.infos
})
export default connect(mapStateToProps,{fetchInfos})(SalaryRangeChart)