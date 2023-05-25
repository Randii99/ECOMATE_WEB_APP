import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


export default class report extends Component {


    constructor(props) {

        super(props);

        this.state = {

            electricities: []
        };

    }
    componentDidMount() {

        this.retriveElectricities();
    }
    retriveElectricities() {

        axios.get("http://localhost:8070/electricity/all").then(res => {

            if (res.data.success) {
                this.setState({

                    electricities: res.data.existingElectricities

                });

                console.log(this.state. electricities)

            }


        })



    }
   
 
    repotGen=()=>{

         window.print();

    }




    render() {

        return (


            <div className="container">
       

            <center>
            <center><strong><u><h2 class="text-light bg-dark" > All Details Report</h2></u> </strong>
            </center>
            </center>
       <table className="table table-hover" style={{marginTop:'40px'}}>
       <thead>
       <tr>
         
       
       <th scope="col">Pannel Size</th>
       <th scope="col">Company</th>
       <th scope="col">Availability Of Intensity</th>
       <th scope="col">Last Month Electricity Bill</th>
       <th scope="col">Units</th>
       <th scope="col">Irradiance</th>
       <th scope="col">Conversion Efficiency</th>
       
            
            
            </tr>
      </thead>
      <tbody>
 
        {this.state.electricities.map((electricities,index)=>(
 
         <tr>
            
            <td>{electricities.pannelSize}</td>
            <td>{electricities.company}</td>
            <td>{electricities.intensity}</td>
            <td>{electricities.monthlyBill}</td>
            <td>{electricities.units}</td>
            <td>{electricities.irradiance}</td>
            <td>{electricities.conversionEfficiency}</td>
            
            </tr>
            ))}
                       
          </tbody>
                
            </table>
          < button type="button" class="btn btn-danger" style={{marginTop:'15px' , width:'300px'}}  onClick={this.repotGen}><strong>Print Report</strong></button>
            </div>

        )
    }

}