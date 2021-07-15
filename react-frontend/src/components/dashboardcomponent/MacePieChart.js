import React, {Component} from "react";
import { Chart } from "react-google-charts";
import { connect } from "react-redux";
import { fetchInfos } from '../../actions/uscensuslearnActions';

class MacePieChart extends Component{
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
        var maceTab= [];
        maceTab['White'] = 0;
        maceTab['Asian or Pacific Islander'] = 0;
        maceTab['Amer Indian Aleut or Eskimo'] = 0;
        maceTab['Balck'] = 0;
        maceTab['Other'] = 0;



        for(var i =0; i<infos.length; i++){
            if(infos[i].mace === "White"){
                maceTab['White'] += 1
            }
            else if(infos[i].mace === "Asian or Pacific Islander") {
                maceTab['Asian or Pacific Islander'] += 1;
            }
            else if(infos[i].mace === "Amer Indian Aleut or Eskimo") {
                maceTab['Amer Indian Aleut or Eskimo'] += 1;
            }
            else if(infos[i].mace === "Black") {
                maceTab['Balck'] += 1;
            }
            else{
                maceTab['Other'] += 1;
            }
        }

        
        var maceData = [['Mace', 'Count'], ['White', maceTab['White']], ['Asian or Pacific Islander', maceTab['Asian or Pacific Islander']],  ['Amer Indian Aleut or Eskimo', maceTab['Amer Indian Aleut or Eskimo']], ['Balck', maceTab['Balck']] , ['Other', maceTab['Other']]  ]

        return(
            <div className='justify-content-center'>
                <div className="card mt-3">
                        <div className="card-body"> 
                        <Chart
                            width={'950px'}
                            height={'500px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={maceData}
                            options={{
                                title: 'Mace Chart',
                                // Just add this option
                                is3D: true,
                            }}
                            rootProps={{ 'data-testid': '2' }}
                        />
                        </div>
                    </div>
            </div>
        )
    }

}const mapStateToProps = state => ({
    infos : state.infos
})
export default connect(mapStateToProps,{fetchInfos})(MacePieChart)