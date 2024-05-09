const mongoose= require('mongoose');





const schema= mongoose.schema({
  name:{type:string,required:true},
  email:{type:string,required:true},
 phone :{type:number,required:true},
 message:{type:string,require:true}
})

const data_model= new mongoose.model('data-model',schema)

module.exports=data_model;