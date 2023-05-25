import React, { useState } from "react";
import axios from "axios";
import "./../style2.css"; // Import the CSS file


// add data

function AddElectricity(){

  const [pannelSize,setpannelSize] = useState("");
  const [company,setcompany] = useState("");
  const [intensity,setintensity] = useState("");
  const [monthlyBill,setmonthlyBill] = useState("");
  const [units,setunits] = useState("");
  const [irradiance,setirradiance] = useState("");
  const [conversionEfficiency,setconversionEfficiency] = useState("");
  //const [monthlyGeneratedElectricity,setmonthlyGeneratedElectricity] = useState("");
  //const [savingPower,setsavingPower] = useState("");
  //const [savingMoney,setsavingMoney] = useState("");


  function sendData(e){
   e.preventDefault();
   
   const newElectricity={

    pannelSize,
    company,
    intensity,
    monthlyBill,
    units,
    irradiance,
    conversionEfficiency,
   //monthlyGeneratedElectricity,
    //savingPower,
    //savingMoney


   }
   axios.post("http://localhost:8070/electricity/add",newElectricity).then(()=>{

     alert("Data Added Succsessfully")
   }).catch((err)=>{

     alert(err)

   })

  }

 return(
  <div className="container" class="back-img">
     <div class ="card-adding">
    <form onSubmit={sendData}>
      <div class="text-dark">
         <center><h1><strong>SAVING POWER AND MONEY</strong></h1></center><br></br>
      </div>
    <div className="form-group">
      <label for="pannelSize"><strong>Pannel Size </strong></label>
      <input type="text" class="form-control" id="pannelSize" required 
      onChange={(e)=> {

        setpannelSize(e.target.value);

       } }/>
  
    </div><br></br>
    
    <div className="form-group">
  <label htmlFor="company"><strong>Company</strong></label>
  <select className="form-control" id="company" required onChange={(e) => setcompany(e.target.value)}>
    <option value="" disabled defaultValue>Select Company</option>
    <option value="Company A">Company A</option>
    <option value="Company B">Company B</option>
    <option value="Company C">Company C</option>
  </select>
</div>

    <div className="form-group">
      <label for="intensity"><strong>Availability Of Intensity</strong></label>
      <input type="text" class="form-control" id="intensity" required
      onChange={(e)=> {

        setintensity(e.target.value);

       } }/>
      
  
    </div><br></br>

    <div className="form-group">
      <label for="monthlyBill"><strong>Last Month Electricity Bill</strong></label>
      <input type="text" class="form-control" id="monthlyBill" required
      onChange={(e)=> {

        setmonthlyBill(e.target.value);

       } }/>

    
    </div><br></br>
   
    <div className="form-group">
      <label for=" units
"><strong>Units</strong></label>
      <input type="text" class="form-control" id="units" required
      onChange={(e)=> {

        setunits(e.target.value);

       } }/>

    
    </div><br></br>

  
    
    <div class="d-grid gap-2 col-6 mx-auto">
    <button type="submit" className="btn btn-primary"><strong>SUBMIT</strong></button>

    <div>
    <a href="/all" class="btn btn-primary" style={{width:"300px"}}><strong>ALL DETAILS</strong></a>
            </div>
    </div>
    
   </form>
   </div>
   </div>

 )

} 

export default AddElectricity;