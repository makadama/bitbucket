import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from "react-redux";
import { fetchInfos } from '../actions/uscensuslearnActions';
import InfosPage from './InfosPage';
import './homepagestyle.css';

class HomePage extends Component {
	constructor(){
		super()
		this.state={
			val:"",
			nb_person: 0, 
			nb_line: 0,
			loading: false,
			currentPage: 1,
			personPerPage: 10
		}
	}
	componentDidMount(){
		
		this.props.fetchInfos()
		
	}
	
	static getDerivedStateFromProps(nextProps, prevState){
		if(nextProps.infos.infos.length!==prevState.nb_person){
		  return { nb_person: nextProps.infos.infos.length};
	   }
	   else return null;
	 }
	 
	 componentDidUpdate(prevProps, prevState) {
	   if(prevProps.infos.infos.length!==this.props.infos.infos.length){
		 //Perform some operation here
		 this.setState({nb_person: this.props.infos.infos.length});
		 this.props.fetchInfos();
	   }
	 }

	paginate(pageNumber){
		this.setState({
			currentPage: pageNumber
		},() => {
		  this.props.fetchInfos();
		});
	}
  

	render(){
		
		const {infos} = this.props.infos;
		const indexOfLastInfo = this.state.currentPage * this.state.personPerPage;
		const indexOfFirstInfo = indexOfLastInfo - this.state.personPerPage;
		const currentInfos = infos.slice(indexOfFirstInfo, indexOfLastInfo);
		console.log(currentInfos);
		/*const renderInfos =currentInfos;*/


		console.log(infos.length)
		return(
			<div>
				<div style={{marginTop:'1em'}}>
				

 				<div className="container-fluid">
				    <div className="row"> 
				      <div className="col-md-2 mt-4">
				          <div className="card">
				            <div className="text-white p-4" style={{backgroundColor:'#00cccb'}}>
				              <i className="fas fa-home fa-6x"></i>
				              <h2 className="float-right font-weight-bold" style={{fontSize: '50px', textAlign: 'center'}}>{this.state.nb_person}<span className="d-block">rows</span></h2>
				            </div>
				            
				          </div>
				          <div className="card mt-5">
					            <div className=" text-white p-4 " style={{backgroundColor:'#ed7e24'}}>
		                      <i className="fas fa-list-ul fa-6x"></i>
		                      <h2 className="float-right font-weight-bold" style={{fontSize: '40px', textAlign: 'center'}}> 8 <span className="d-block">columns</span></h2>
		                    </div>
				            
				          </div>
				          
				      </div> 
				      <div className="col-10 ">
				        <h2 style={{backgroundColor: '#ed7e24'}} className="text-white p-2 ">US census data table</h2>
				        <div className="container d-flex justify-content-center">
				        
				       <InfosPage renderInfos={currentInfos}/>
					         </div>
				    </div>
				      
				    </div>
				</div>
				
				{infos.length > this.state.personPerPage ? <ReactPaginate pageCount={Math.ceil(infos.length/this.state.personPerPage)} pageRangeDisplayed={2}  marginPagesDisplayed={2} onPageChange={(data) =>this.paginate(data.selected+1)} containerClassName={"pagination"} previousLabel={"précédent"} nextLabel={"suivant"}/> : ''}
				</div>
			</div>
			)
	}
}

const mapStateToProps=state =>({
	infos: state.infos
 })
 
 export default connect(
   mapStateToProps, {
	 fetchInfos })(HomePage)
  
 

