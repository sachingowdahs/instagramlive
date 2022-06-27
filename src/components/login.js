import Image from '../images/loginbg.png'
import Facebook from '../images/facebook.png'
import '../CSS/login.css'
import {useHistory} from "react-router-dom"
import React,{ useContext,useState,useEffect} from 'react'
import { UserContext } from './UserContext'
import Modal from 'react-modal/lib/components/Modal'
import Instagram from '../images/instagram.png'
import { Link } from 'react-router-dom';



const Login =()=>{
const {value,setValue} = useContext(UserContext)
    const history = useHistory();
let [email,setemail]=useState('')
let [password,setpassword]=useState('')
let [modal,setmodal]=useState(false)
let [welcome,setwelcome]=useState()
let [signupdata,setsignupdata]=useState([])



useEffect(()=>{
    setTimeout(()=>{
      fetch('http://localhost:7777/signupdetails')
      .then(res=>{
        return res.json()
      })
      .then(data=>{
        setsignupdata(data)
      })
    },100)
  },[])

let changeEmail=(e)=>{

    setemail(e.target.value)
         }

         let changeEmail1=(e)=>{

            setpassword(e.target.value)
                 }

let length1=signupdata.length;
   
    let login=()=>{
    if(email!=''&& password!=''){
    for(let i=0 ; i<length1;i++){
       if(email==signupdata[i].number && password == signupdata[i].password){
           let number=signupdata[i].number;
           let password=signupdata[i].password;
           let fullname=signupdata[i].fullname;
           let username=signupdata[i].username;
           let followers=signupdata[i].followers;
           let following=signupdata[i].following;
           let posts=signupdata[i].posts;
           setwelcome(signupdata[i].fullname)
        let data={number,fullname,username,password,followers,following,posts}
        fetch('http://localhost:7777/currentaccount',{
           method:"POST",
           headers:{"content-Type":"application/json"},
           body:JSON.stringify(data)
        })   
        setmodal(true)
        
       }
    }
}
else{
    alert('enter valid email')
}
    }

    let signup=()=>{
        history.push('/signup')
    }
   
    return (
        <div style={{paddingLeft:'20%',paddingRight:'20%',paddingTop:'2%',backgroundColor:'rgba(var(--b3f,250,250,250),1)',height:'900px',display:'flex'}}>
       <div style={{backgroundImage: 'url('+Image+')',width:'430px',height:'600px',marginLeft:'5%'}}>
       <div class="container">
            <div class="slideshow">


                <div class="slideshow-wrapper">
                    <div class="slide">
                        <img class="slide-img"
                            src=
"https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" style={{width:'100%'}}/>
                    </div>
                    <div class="slide">
                        <img class="slide-img"
                            src=
"https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg" style={{width:'100%'}}/>
                    </div>
                    <div class="slide">
                        <img class="slide-img" src=
"https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg" style={{width:'100%'}}/>
                    </div>
                    <div class="slide">
                        <img class="slide-img" src=
"https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg" style={{width:'100%'}}/>
                    </div>
                </div>
            </div>
       
    </div>
    </div>

    <div>
    <div className='login'>
        <img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' style={{width:'160px',marginTop:'10%',marginLeft:'25%'}}></img>

       
        <form>

        <input  type='text'  name='phone' maxLength={10} placeholder='Phone number,username,or email' value={email} onChange={changeEmail} style={{fontSize:'12px',paddingLeft:'10px',marginLeft:'10%',marginRight:'10%',width:'80%',height:'38px',border:'1px solid rgba(var(--b6a,219,219,219),1)',  outline: 'none',backgroundColor:'rgba(var(--b3f,250,250,250),1)',marginTop:'9%'}}></input><br></br>

        <input type='password' placeholder='Password' value={password} onChange={changeEmail1} style={{fontSize:'12px',paddingLeft:'10px',marginLeft:'10%',marginRight:'10%',width:'80%',height:'38px',border:'1px solid rgba(var(--b6a,219,219,219),1)', outline: 'none',backgroundColor:'rgba(var(--b3f,250,250,250),1)',marginTop:'2%'}}></input>


        <p onClick={login} style={{fontWeight:"bolder",color:'white',backgroundColor:'rgba(var(--d69,0,149,246),1)',border:'1px solid white',padding:'3px 110px',fontSize:'16px',width:'80%',marginLeft:'10%',marginTop:'5%'}}>Log In</p>
       
        </form>

        <div style={{display:'flex',marginLeft:'10%',color:'rgb(191, 191, 191)',marginTop:'5%'}}>
           <p style={{marginTop:'-13px',marginRight:'10px'}}>__________________</p><h6 style={{fontSize:'12px'}}>OR</h6><p style={{marginTop:'-13px',marginLeft:'10px'}}>__________________</p>
        </div>

        <div style={{display:'flex',marginLeft:'24%',marginTop:'4%'}}>
          <img src={Facebook} style={{width:'18px',height:'18px'}}></img>
          <h6 style={{fontSize:'14px',marginLeft:'9px',color:'#0000e6'}}>Log in with Facebook</h6>
        </div>

        <p style={{fontSize:'13px',marginLeft:'34%',marginTop:'4%'}}>Forgot password?</p>
        </div>


        <div className='signup'>
         <p>Dont't have an account? <span onClick={signup} style={{color:'rgba(var(--d69,0,149,246),1)',fontSize:'14px',fontWeight:'bold'}}>Sign up</span></p>
        </div>
       <p style={{fontSize:'14px',marginTop:'20px',marginLeft:'40%'}}>Get the app.</p>

       <div style={{display:'flex',marginLeft:'10%'}}>
           <img src='https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png' style={{width:'140px',height:'42px'}}></img>
           <img src='https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png' style={{width:'140px',height:'42px',marginLeft:'2%'}}></img>
       </div>
        </div>
        <Modal
         isOpen={modal}
         onRequestClose={()=>setmodal(true)}
         style={{
           overlay:{
            backgroundColor:'rgba(0,0,0,.85)'
           },
           content:{marginTop:'9%',padding:'0px',marginLeft:'35%',marginRight:'35%',marginBottom:'9%',borderRadius:'4.5%',height:'300px'}
         }}>
             <img src={Instagram} style={{width:'20%',display:'block', marginLeft: 'auto',
  marginRight: 'auto',marginTop:'7%',marginBottom:'7%'}} ></img>
        <h4 style={{textAlign:'center'}}>Welcome back {welcome}</h4>
          <h5 style={{textAlign:'center'}}>Now see photos and videos from your friends.</h5>
          <Link to='/home'><button style={{width:'80%',marginLeft:'10%',marginTop:'5%',height:'12%',color:'white',backgroundColor:'rgba(var(--d69,0,149,246),1)',border:'1px solid pink'}}>OK</button></Link>
         </Modal>
       </div>
    )
}

export default Login;
