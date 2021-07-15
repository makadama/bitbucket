import React, {Component} from "react";
import { Chart } from "react-google-charts";
import { connect } from "react-redux";
import { fetchInfos } from '../../actions/uscensuslearnActions';

class AgeBarChart extends Component{
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
        var malesTotalAge = 0;
        var femalesTotalAge = 0;
        var maleCount = 0;
        var femaleCount = 0;
        var maleMean = 0;
        var femaleMean = 0;

        for(var i =0; i<infos.length; i++){
            if(infos[i].sex === "Male"){
                malesTotalAge+= infos[i].age
                maleCount+= 1;
            }
            else if(infos[i].sex === "Female") {
                femalesTotalAge+= infos[i].age;
                femaleCount+= 1;
            }
            else{
                console.log('not include')
            }
        }

        maleMean = malesTotalAge/maleCount;
        femaleMean = femalesTotalAge/femaleCount;
        var sexData = [['Sex', 'Mean Age'], ['Female', femaleMean], ['Male', maleMean] ]

        return(
            <div>
                <div className="card">
                        <div className="card-body"> 
                            <Chart
								  height={'150px'}
								  chartType="BarChart"
								  loader={<div>Loading Chart</div>}
								  data={sexData}
								  options={{
								    title: 'vizualise age among sex',
								    chartArea: { width: '50%' },
								    hAxis: {
								      title: 'Age',
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
export default connect(mapStateToProps,{fetchInfos})(AgeBarChart)