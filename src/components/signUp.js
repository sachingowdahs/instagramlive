import { useState } from "react";
import '../CSS/sign.css'
import React,{ useContext} from 'react'
import { UserContext } from './UserContext'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";


const Signup = () => {
    const {fullname,setfullname,username,setusername,number,setnumber,password,setpassword} = useContext(UserContext)


    let uploadnumber=(e)=>{
        setnumber(e.target.value)
        }

    let uploadfullname=(e)=>{
        setfullname(e.target.value)
        }

    let uploadusername=(e)=>{
        setusername(e.target.value)
        }

    let uploadpassword=(e)=>{
        setpassword(e.target.value)
        }

        let history=useHistory()
    
        let uploaddetails=(e)=>{
            e.preventDefault()
            let followers = (Math.floor(Math.random() * 1000)); 
            let following = (Math.floor(Math.random() * 1000)); 
            let posts = (Math.floor(Math.random() * 100));     
    
            let data={number,fullname,username,password,followers,following,posts}
            if(number.length==10){
                if(fullname.length>=5){
                    if(username.length>=5){
                        if(password.length==8){
                fetch('http://localhost:7777/signupdetails',{
                    method:"POST",
                    headers:{"content-Type":"application/json"},
                    body:JSON.stringify(data)
                 })
     
                 fetch('http://localhost:7777/currentaccount',{
                     method:"POST",
                     headers:{"content-Type":"application/json"},
                     body:JSON.stringify(data)
                  })
               
                 history.push('/home')
                        }
                        else{
                            alert('password has 8 character')
                        }
                }
                else{
                    alert('name has minimum 5 characters')
                }
                }
                else{
                    alert('name has minimum 5 characters')
                }
            }
            
            else{
                alert('please enter 10 number')
            }
           
          }
 
    return ( 
        
<div style={{paddingLeft:'38%',paddingRight:'35%',paddingTop:'10px',paddingBottom:'160px',backgroundColor:'rgba(var(--b3f,250,250,250),1)'}}>
    <div className='sign'>

        <img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' style={{width:'160px',marginTop:'10%',marginLeft:'25%'}}></img>

        <h6 style={{width:'300px',marginLeft:'40px',fontSize:'18px',marginTop:'6%',color:'#8c8c8c'}}>Sign up to see photos and videos <span  style={{marginLeft:'55px'}}>from your friends.</span></h6>
        <form onSubmit={uploaddetails}>

        <input  type='text' placeholder='Mobile number or Email' value={number} required onChange={uploadnumber} style={{fontSize:'12px',marginLeft:'10%',paddingLeft:'10px',marginRight:'10%',width:'80%',height:'38px',border:'1px solid rgba(var(--b6a,219,219,219),1)',  outline: 'none',backgroundColor:'rgba(var(--b3f,250,250,250),1)',marginTop:'9%'}}></input><br></br>

        <input type='text' placeholder='Full Name' value={fullname} required onChange={uploadfullname} style={{fontSize:'12px',paddingLeft:'10px',marginLeft:'10%',marginRight:'10%',width:'80%',height:'38px',border:'1px solid rgba(var(--b6a,219,219,219),1)', outline: 'none',backgroundColor:'rgba(var(--b3f,250,250,250),1)',marginTop:'2%'}}></input>

        <input  type='text' placeholder='Username' value={username} required onChange={uploadusername} style={{fontSize:'12px',paddingLeft:'10px',marginLeft:'10%',marginRight:'10%',width:'80%',height:'38px',border:'1px solid rgba(var(--b6a,219,219,219),1)',  outline: 'none',backgroundColor:'rgba(var(--b3f,250,250,250),1)',marginTop:'2%'}}></input><br></br>

        <input type='password' placeholder='Password' value={password} required onChange={uploadpassword} style={{fontSize:'12px',paddingLeft:'10px',marginLeft:'10%',marginRight:'10%',width:'80%',height:'38px',border:'1px solid rgba(var(--b6a,219,219,219),1)', outline: 'none',backgroundColor:'rgba(var(--b3f,250,250,250),1)',marginTop:'2%'}}></input>

        <button  style={{fontWeight:"bolder",color:'white',backgroundColor:'rgba(var(--d69,0,149,246),1)',border:'1px solid white',padding:'3px 10px',fontSize:'16px',width:'80%',marginLeft:'10%',marginTop:'5%'}}>Sign up</button>
       
        </form>

        <h6 style={{width:'300px',marginLeft:'42px',fontSize:'13px',marginTop:'6%',color:'#8c8c8c'}}>By signing up, you agree to our Terms , Data</h6>
        <h6 style={{width:'300px',marginLeft:'96px',fontSize:'12px',marginTop:'-1.5%',color:'#8c8c8c'}}>Policy and Cookies Policy .</h6>
        </div>


        <div style={{width:'350px',height:'66px',border:'1px solid rgba(var(--b6a,219,219,219),1)',backgroundColor:'white',marginTop:'1.2%',marginLeft:'1.2%',fontSize:'14px',paddingLeft:'22%',paddingTop:'20px'}}>
         <p>Have an account? <span style={{color:'rgba(var(--d69,0,149,246),1)',fontSize:'14px',fontWeight:'bold'}}><Link to='/'>Log in</Link></span></p>
        </div>

        <p style={{fontSize:'14px',marginTop:'20px',marginLeft:'40%'}}>Get the app.</p>

       <div style={{display:'flex',marginLeft:'10%'}}>
           <img src='https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png' style={{width:'140px',height:'42px'}}></img>
           <img src='https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png' style={{width:'140px',height:'42px',marginLeft:'2%'}}></img>
       </div>
                </div>
                
     );
}
 
export default Signup;