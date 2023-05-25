const router = require("express").Router();
//const electricity = require("../models/electricity");
let Electricity = require("../models/Electricity");




//Add a new data to the system
router.route("/add").post((req,res)=>{

  const pannelSize = Number(req.body.pannelSize);
  const company = req.body.company;
  const intensity = Number(req.body.intensity);
  const  monthlyBill =Number(req.body.monthlyBill);
  const units = Number(req.body.units);
  const irradiance = 0.05; 
  const conversionEfficiency = 0.08; 
  const totalEnergyProduced = pannelSize * intensity * irradiance * conversionEfficiency;
  const monthlyGeneratedElectricity = totalEnergyProduced * 30;
 // const savingPower = Electricity.monthlyBill - Electricity.units ;
 // const savingMoney = (Electricity.monthlyBill / Electricity.units) * monthlyGeneratedElectricity - Electricity.monthlyBill ;
    
  const newElectricity  = new Electricity({
    pannelSize,
    company,
    intensity ,
    monthlyBill,
    units,
    irradiance,
    conversionEfficiency,
    monthlyGeneratedElectricity,
    //savingPower,
    //savingMoney
    
    });
    newElectricity.save().then(()=>{
        res.json("Data Added");
     }).catch((err)=>{
   
        console.log(err);
     })
   }) 


//Get all data 

router.get('/all',(_req,res)=>{
  Electricity.find().exec((err,electricities)=>{
      if(err){
    return res.status(400).json({
     error:err
    });
   }

    return res.status(200).json({
        success:true,
        existingElectricities:electricities
    });
  });
});


//Retrive by ID 222
router.route("/get/:id").get(async(req,res)=>{
    const pk = await Electricity.findById(req.params.id);
  
  if (pk) {
    res.json(pk);
  } else {
    res.status(404).json({ message: "Data not found" });
  }
  })

  //Update vehicle Details

router.route("/update/:id").patch(async(req,res)=>{

  const pk = await Electricity.findById(req.params.id);

if (pk) {
  pk.pannelSize = req.body.pannelSize || pk.pannelSize;
  pk.company = req.body.company ||  pk.company;
  pk.intensity = req.body.intensity || pk.intensity;
  pk.monthlyBill = req.body.monthlyBill || pk.monthlyBill;
  pk.units = req.body.units || pk.units;
    pk.irradiance = 5.0;
    pk.conversionEfficiency = 0.8;
  const EditElectricity = await pk.save();

  res.json({
        pannelSize: EditElectricity.pannelSize,
        company: EditElectricity.company,
        intensity: EditElectricity.intensity,
        monthlyBill: EditElectricity.monthlyBill,
        units: EditElectricity.units,
        irradiance: EditElectricity.irradiance,
        conversionEfficiency: EditElectricity.conversionEfficiency
  });
} else {
  res.status(404);
  
  throw new Error("Can't Update Details");
}

})


//Delete any vehicle
router.route("/delete/:id").delete(async(req,res)=>{

  let vId =req.params.id;
  
  await Electricity.findByIdAndDelete(vId).then(()=> {
  
   res.status(200).send({status: "Data Deleted.."});
   
   }).catch((err)=>{
  
  console.log(err.message);
  res.status(500).send({status: "Error with delete the details", error:err.message});
  
   })
  
  })
  
  module.exports = router;