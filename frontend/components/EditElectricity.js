import React,{useEffect, useState} from "react"
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./../style2.css";





export default function EditElectricity(){

  const [pannelSize,setpannelSize] = useState("");
    const [company,setcompany] = useState("");
    const [intensity,setintensity] = useState("");
    const [monthlyBill,setmonthlyBill] = useState("");
    const [units,setunits] = useState("");
    const [irradiance,setirradiance] = useState("");
    const [conversionEfficiency,setconversionEfficiency] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getElectricities();
  }, []);


  function getElectricities() {
    let electricity = true;

// retriew data for id

    fetch(`http://localhost:8070/electricity/get/${id}`)
      .then((res) => res.json())

      .then((result) => {
        if (electricity) {
          setpannelSize(result.pannelSize);
          setcompany(result.company);
          setintensity(result.intensity);
          setmonthlyBill(result.monthlyBill);
          setunits(result.setunits);
         
        }
        console.log(result);
      });

    return () => (electricity = false);
  }

   // update data 
  function updateData(e){

      e.preventDefault();

      //alert("Insert");

      const updateElectricity ={
        pannelSize,
    company,
    intensity,
    monthlyBill,
    units,
    irradiance,
    conversionEfficiency,
     
    
      }

      axios
    .patch(`http://localhost:8070/electricity/update/${id}`, updateElectricity)
    .then((_res) => {
      alert("Data Updated Successfully!");
     // navigate("/front");
      console.log(updateElectricity);
    })
    .catch((_err) => {
      
      alert("Database Error");
    });
  }

return(

  <div className="container" class="back-img">
  <div class ="card-company">

<div class="text-dark">
   <center><h1><strong><u> SAVING POWER AND MONEY </u></strong></h1></center><br></br>
</div>

<form className =  "company" >
<div className="form-group">
<label for="pannelSize"><strong>Pannel Size</strong></label>
<input type="text" class="form-control" id="pannelSize" required 
 value={pannelSize}
onChange={(e)=>{setpannelSize(e.target.value);}}
/>
</div>
<br></br>

<div className="form-group">
  <label htmlFor="company">
    <strong>Company</strong>
  </label>
  <select
    className="form-control"
    id="company"
    required
    value={company}
    onChange={(e) => setcompany(e.target.value)}
  >
    <option value="" disabled defaultValue>
      Select a Company
    </option>
    <option value="Company A">Company A</option>
    <option value="Company B">Company B</option>
    <option value="Company C">Company C</option>
  </select>
</div>
<br></br>

<div className="form-group">
<label for="intensity"><strong>Availability Of Intensity</strong></label>
<input type="int" class="form-control" id="intensity" required 
 value={intensity}
onChange={(e)=> {setintensity(e.target.value);} }
/>
</div>
<br></br>

<div className="form-group">
<label for="monthlyBill"><strong>Last Month Electricity Bill</strong></label>
<input type="text" class="form-control" id="Email" required  value={monthlyBill}
onChange={(e)=> {setmonthlyBill(e.target.value);} }
/>
</div>
<br></br>
<div className="form-group">
      <label for=" units
"><strong>Units</strong></label>
      <input type="int" class="form-control" id="units" required  value={units}
onChange={(e)=> {setunits(e.target.value);} }
 />
 </div><br></br>

<div class="d-grid gap-2 col-6 mx-auto">
<button type="button" class="btn btn-warning" onClick={updateData}><strong> Update Details </strong></button>
<div>
<a href="/all" class="btn btn-warning" style={{width:"300px"}}><strong>View Details</strong></a>
</div>
</div>

</form>
</div>
</div>

)

}