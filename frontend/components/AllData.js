import React,{Component} from "react";
import axios from "axios";

export default class AllData extends Component{


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
//retreive data to the admin
   axios.get("http://localhost:8070/electricity/all").then(res=>{

      if(res.data.success){
          this.setState({

            electricities:res.data.existingElectricities

          });

          console.log(this.state.electricities)

      }
})

}
//delete data in the database
onDelete(id){

     fetch(`http://localhost:8070/electricity/delete/${id}`,{

           method:`DELETE`

          }).then((result)=>{

         result.json().then((resp)=>{

           console.warn(resp)
           alert("Data Deleted Successfully")
           this.retriveElectricities()

         })
        })
     }
     render(){
       return(

      <div className="container">
       
           <center>
           <center><strong><u><h2 class="text-light bg-dark" > Manage Details</h2></u> </strong>
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
      <th scope="col">Monthly Generated Electricity</th>
      <th scope="col">Acction</th>
           
           
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
          

          <td>
             <button type="button" class="btn btn-danger" onClick={()=>this.onDelete(electricities._id)}>
             <i className="fas fa-trash"></i>Delete</button>
             </td>

             <td>
                        <a className="btn btn-success" href={`/edit/${electricities._id}`}>
                          <i className="fas fa-edit"></i>Edit
                        </a></td>

           </tr>
           ))}
           
           
       
        </tbody>
        
        
        
         </table>
         <a href ="/add" type="submit" class="btn btn-danger"  style={{ marginTop: '60px', color:'white', width:'245px', height:'38px', margin:'10px'}} ><i class="fas fa-arrow-left">&nbsp;&nbsp;&nbsp;&nbsp;</i><b>BACK</b></a>
         <a href ="/report" type="submit" class="btn btn-danger"  style={{ marginTop: '60px', color:'white', width:'245px', height:'38px', margin:'10px'}} ><i class="fas fa-print"></i><b>&nbsp;&nbsp;&nbsp;&nbsp;GET REPORT</b></a>
         <a href ="/search" type="submit" class="btn btn-danger"  style={{ marginTop: '60px', color:'white', width:'245px', height:'38px', margin:'10px'}} ><i class="fas fa-search"></i><b>&nbsp;&nbsp;&nbsp;&nbsp;SEARCH</b></a>
      </div>
      ) 
 }

 }
