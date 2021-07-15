import React, {Component} from "react";
import { Link, withRouter } from 'react-router-dom'

class CostumNavbar extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
			<nav className="navbar navbar-light mb-1" style={{background:'#00cccb'}}>
		        <div className="container">
		          <div className="navbar-header">
		            <Link className="navbar-brand text-white text-lg brand-text" to="/">
                        US Census data
		            </Link>
		          </div>
		          <ul className="navbar-nav ml-auto text-light d-inline-block">
		            <li className="nav-item d-inline-block mr-4">
		              <Link className=" text-white text-lg" to="/dashboard" style={{textDecoration:'none'}}>Data visualisation</Link>
		            </li>
		          </ul>
		        </div>
      		</nav>
		</div>
        )
    }
}
export default CostumNavbar;