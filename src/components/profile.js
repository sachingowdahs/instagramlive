import '../CSS/profile.css'
import Virat from '../images/virat.jpg'
import Setting from '../images/setting.png'
import Save from '../images/save.png'
import Tag from '../images/tag.png'
import Navbar from '../components/navbar'
import {useState,useEffect} from 'react'


const Profile=()=>{

    let [currentaccount,setcurrentaccount]=useState([])


useEffect(()=>{

        fetch('http://localhost:7777/currentaccount')
        .then(res=>{
          return res.json()
        })
        .then(data=>{
          setcurrentaccount(data)
        })
    
        
 
},[])
    return(
        <div>
            <Navbar/>
        <div className="mainprofile">
    <div className='mainprofile1'>
        <img src={Virat} style={{width:'150px',height:'150px',borderRadius:'50%',marginLeft:'6%',marginRight:'7%'}}></img>
        <div>
        <div style={{display:'flex'}}>
            <p style={{fontSize:'30px', marginRight:'5%',fontWeight:"lighter",width:'400px'}}>{currentaccount.fullname}_{currentaccount.username}</p>
            <h6 style={{marginTop:'2%',border:'1px solid rgba(var(--b6a,219,219,219),1)' ,height:'30px',width:'130px',paddingTop:'4px',paddingLeft:'14px'}}>Edit Profile</h6>
            <img src={Setting} style={{width:'45px',height:'25px',marginTop:'10px',paddingLeft:'20px'}}></img>
        </div>
        <div style={{display:'flex'}}>
        <h6 style={{marginTop:'3px',marginRight:'3px'}}>{currentaccount.posts}</h6><p >posts</p>
        <h6 style={{marginTop:'3px',marginRight:'3px',marginLeft:'9.5%'}}>{currentaccount.followers}</h6><p >followers</p>
        <h6 style={{marginTop:'3px',marginRight:'3px',marginLeft:'9.5%'}}>{currentaccount.following}</h6><p >following</p>
        </div>
        <h6>{currentaccount.username}...</h6>
        <h6 style={{color:'#a2a9b3'}}>Artist</h6>

        </div>
    </div>

    <div style={{marginLeft:'37.6%',display:'flex',marginTop:'1.4%'}}>
        <img src='https://www.shareicon.net/data/256x256/2015/10/07/652469_boxes_512x512.png' style={{width:'1.5%',height:'15px',marginTop:'2px',marginRight:'10px'}}></img>
        <p style={{fontSize:'15px',fontWeight:"revert"}}>POSTS</p>

        <img src={Save} style={{width:'1.5%',height:'15px',marginTop:'2px',marginRight:'10px',marginLeft:'58px'}}></img>
        <p style={{fontSize:'15px',fontWeight:"revert"}}>SAVED</p>

        <img src={Tag} style={{width:'1.5%',height:'15px',marginTop:'2px',marginRight:'10px',marginLeft:'58px'}}></img>
        <p style={{fontSize:'15px',fontWeight:"revert"}}>TAGGED</p>
    </div>

    </div>
    </div>
    )
}

export default Profile;