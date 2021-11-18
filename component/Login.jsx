import React, { useEffect, useState } from 'react';
import router from "next/router";

function Dashboard() {

  const [name, setName ] = useState();
  const [email , setEmail ] = useState();
  const [password, setPassword ] = useState();
  

  const handelchangeName =  (props) =>{
    setName(props.target.value);
   // console.log(name);
  };
  const handelchangeEmail =  (event) =>{
    setEmail(event.target.value);
   // console.log(email);
  };
  const handelchangepassword =  (event) =>{
    setPassword(event.target.value);
    //console.log(mobile);
  };


 const registerAPI = async () =>{
   const response  = await fetch('/api/register',{
       method:'POST',
       header:{'Content-Type':'application/json'}, body:JSON.stringify({
           name  : 'Kuldeep',
           password: 'swapee123',
           email: 'swap@gmail.com',
       })},
   )
  .then(response => response.json())
  .then(json => console.log(json))
}

useEffect(() => {
    registerAPI();
    // alert("yes");
    setEmail("kuldeep@gmail.com");
    setName("Kuldeep Soni");
    setPassword("swpaee@1");
   
})

  const onSubmitCall  =()=>{
    registerAPI();
   
    if (!/\S+@\S+\.\S+/.test(email)){
        alert("Email Is not Valid ");
       // break;
    }

   
else {
  // alert(JSON.stringify(name) + " " +JSON.stringify(mobile) + " " + JSON.stringify(email) +" " + JSON.stringify(address));
  //   console.log(name);
  //   console.log(email);
  //   console.log(setPassword);
 
   // alert("mobile.length");
   router.push("/dashboard");
  }
  
  
  };

  const   
  onSubmitCallSignup  =()=>{
    
   router.push("/registration");

  
  };



  return (
                    <div  >
                    <div style={{
                marginTop:50,
                }} ></div>
                <div style={{
                margin: "auto",
                width: 200,
                border: 5,
                borderColor: "red",
                borderStyle:"solid",
                borderRadius:20,
                padding: 10,}}>
                <form >
                <lable> <b style={{backgroundColor:'skyblue'}}>Login </b> </lable><br/><br/>
                <lable> Email:<input type = "email" value= {email} onChange= {handelchangeEmail} placeholder="Enter email"></input></lable><br/><br/>
                <lable> Password:<input  type = "text" value= {password} onChange= {handelchangepassword} placeholder="Enter password"></input></lable><br/><br/>
                <input  type ="button" onClick={onSubmitCall} value="Login" /><br/>
                <input  type ="button" onClick={onSubmitCallSignup} value="Signup" />
                </form>
                </div>
                </div>
  );
}

export default Dashboard;