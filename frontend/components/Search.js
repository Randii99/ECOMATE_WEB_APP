import React,{Component} from "react";
import axios from "axios";

export default class Search extends Component{


   constructor(props){

       super(props);

       this.state={

        electricities:[]
       };

   }
  componentDidMount(){

   this.retriveElectricities();
  }
  retriveElectricities(){

   axios.get("http://localhost:8070/electricity/all").then(res=>{

      if(res.data.success){
          this.setState({

            electricities:res.data.existingElectricities

          });

          console.log(this.state. electricities)

      }
})

}

//Filter /Search Mechod
filterContent(electricities,searchTerm){

   const results= electricities.filter((electricities)=> electricities.company.toLowerCase().includes(searchTerm));
   this.setState({electricities:results});
 
 }
 
 handleTextSearch=(e)=>{
 
    const searchTerm=e.currentTarget.value;
    axios.get("http://localhost:8070/electricity/all").then(res=>{
 
     if(res.data.success){
        this.filterContent(res.data.existingElectricities
         ,searchTerm)
     }
 });
 
 }

     render(){
       return(

      <div className="container" class="p-3 mb-2 bg-dark text-white">
         <div className="row">      </div>
         <div className="col-lg-9 mt-2 mb-2">     
         <h3> <strong> Search The Company Name Here </strong></h3>
         </div>

           <div className="col-lg-3 mt-2 mb-2" class="text-center">
            
            <input
             className="form-control"
             type="search"
             placeholder="Search"
             name="searchTerm"
             onChange={this.handleTextSearch}
            
            ></input>
            </div>
      <table className="table table-dark table-hover" style={{marginTop:'40px'}}>
      <thead>
      <tr>
        
     
      <th scope="col">Pannel Size</th>
      <th scope="col">Company</th>
      <th scope="col">Availability Of Intensity</th>
      <th scope="col">Last Month Electricity Bill</th>
      <th scope="col">Units</th>
      <th scope="col">Irradiance</th>
      <th scope="col">Conversion Efficiency</th>
      <th scope="col">Monthly Generated Electricity</th>
      <th scope="col">Saving Power</th>
      <th scope="col">Saving Money</th>
         
               
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
           <td>{electricities.monthlyGeneratedElectricity}</td>
           <td>{electricities.savingPower}</td>
           <td>{electricities.savingMoney}</td>
                     
           </tr>
           ))}
       
        </tbody>
       </table>
       <a href ="/report" type="submit" class="btn btn-danger"  style={{ marginTop: '60px', color:'white', width:'245px', height:'38px', margin:'10px'}} ><b>GET REPORT</b></a>
      </div>
      ) 
 }

 }
