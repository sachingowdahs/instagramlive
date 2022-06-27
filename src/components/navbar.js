import '../CSS/navbar.css';
import  Messenger from '../images/messenger.svg'
import Home from '../images/home.png'
import Add from '../images/add.png'
import Direction from '../images/direction.png'
import Heart from '../images/heart.png'
import Video from '../images/videoandimage.png'
import Virat from '../images/virat.jpg'
import Loading from '../images/loading.gif'
import Profile from '../images/profileavatar.png'
import Save from '../images/save.png'
import Setting from '../images/setting.png'
import Switch from '../images/switch.png'







import { Link } from 'react-router-dom';
import Modal from 'react-modal/lib/components/Modal';
import { useState ,useEffect} from 'react';


const Navbar = () => {

   let [homeprofile,sethomeprofile]=useState([])
   let [requests,setrequest]=useState([])

   let request=()=>{
      setmodal(true)
      setTimeout(()=>{
       setrequest(homeprofile)
      setloading(false)
      },1500)
     
   }

   useEffect(()=>{
      setTimeout(()=>{
        fetch('http://localhost:7777/Homeprofile')
        .then(res=>{
          return res.json()
        })
        .then(data=>{
          sethomeprofile(data)
         
        })
      },1000)
    },[])
  

let [modal,setmodal]=useState(false)
let [modal1,setmodal1]=useState(false)
let [modal2,setmodal2]=useState(false)
let [loading,setloading]=useState(true)
    return ( 
        <div className="Navbar" >

           <div style={{width:'33%',}}><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img>
           </div>

           <div style={{width:'42%',display:'flex'}}>   
      <input className='search' type="text" placeholder="Search.." placeholderContent='red' name="search"></input>
      </div>

           <div style={{width:'40%'}}>


              <Link to='/home'> <svg style={{width:'10%',marginRight:'8%'}} aria-label="Home" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></Link>


               <Link to='/message'><svg style={{width:'10%',marginRight:'8%'}} aria-label="Messenger" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.739"></path><path d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z" fill-rule="evenodd"></path></svg></Link>

               <svg style={{width:'10%',marginRight:'8%'}} onClick={()=>setmodal1(true)} aria-label="New Post" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>


              
               <Link to='/explore'><svg style={{width:'7%',marginRight:'8%'}} aria-label="Find People" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon><polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg></Link>

               <svg onClick={request}style={{width:'7%',marginRight:'8%'}} aria-label="Activity Feed" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>

               <img  onClick={()=>setmodal2(true)}style={{width:'27px',height:'27px',borderRadius:'50%',marginRight:'8%'}} src={Virat}/>
               </div>
            <Modal 
            isOpen={modal} 
            onRequestClose={()=>setmodal(false)}
            style={{
               overlay:{
                  backgroundColor:'transparent'
               },
               content:{
                  marginTop:'22px',marginLeft:'42%',marginRight:'16%',height:'50%'
               }}}>
             <div>
             { loading && <img src={Loading} alt='no image' style={{width:'80%',height:'200px',marginTop:'-10%',marginBottom:'-10%',marginLeft:'9%'}}></img>}
             {requests.map((data)=>{
           return (
            <div style={{display:'flex',marginTop:'2%'}}>
            <div style={{width:'330px',display:'flex'}}>
            <img src={data.pimage} alt="" style={{width:'45px',height:'45px',borderRadius:'50%',marginTop:'2.5%'}}/>
            <div style={{marginLeft:'16px',marginTop:'2%',}}><h6 style={{fontSize:'14px',marginTop:'15%'}}>{data.name} </h6>
          </div>
          <p style={{fontSize:'14px',paddingTop:'5.5%',marginLeft:'3%'}}>started following you.</p><h6 style={{fontSize:'14px',paddingTop:'5.5%',marginLeft:'3%'}}>{data.id}d</h6>
            </div>
            <h6 style={{marginLeft:'3%',marginTop:'6%',fontSize:'13px',color:'rgb(0, 153, 204)',marginLeft:'90px'}}>Follow</h6>
          </div>
           )
         })}
             </div>
             </Modal>
             
             <Modal isOpen={modal1} 
            onRequestClose={()=>setmodal1(false)}
            style={
               {
                  overlay:{backgroundColor:'rgba(0,0,0,.85)'},
                  content:{marginLeft:'30%',marginRight:'30%',marginTop:'4%',borderRadius:'3%',marginBottom:'3%'}
               }
            }>
<h6 style={{textAlign:'center',marginTop:'-1.5%',borderBottom:'1px solid rgba(var(--b6a,219,219,219),1)',paddingBottom:'3%'}}>Create new post</h6>
<img src={Video} style={{width:'20%',marginTop:'30%',marginLeft:'37%'}}></img>

             </Modal>

             <Modal isOpen={modal2} 
            onRequestClose={()=>setmodal2(false)}
            style={
               {
                  overlay:{
                     backgroundColor:'transparent'
                  },
                  content:{marginLeft:'65%',marginRight:'13%',marginTop:'1.2%',borderRadius:'3%',height:'225px'}
               }
            }>
   <div className='profile'>
      <Link style={{textDecoration:'none',color:'black'}}to='/profile'><div style={{display:'flex'}}><img src={Profile} style={{width:'20px',height:'20px',marginRight:'7%'}}></img><p className='profile1' onClick={()=>setmodal2(false)}>Profile</p></div></Link>
      <div style={{display:'flex'}}><img src={Save} style={{width:'20px',height:'20px',marginRight:'7%'}}></img><p onClick={()=>setmodal2(false)}>Saved</p></div>
      <div style={{display:'flex'}}><img src={Setting} style={{width:'20px',height:'20px',marginRight:'7%'}}></img ><p onClick={()=>setmodal2(false)}>Settings</p></div>
      <div style={{display:'flex'}}><img src={Switch} style={{width:'20px',height:'20px',marginRight:'7%'}}></img><p onClick={()=>setmodal2(false)}>Switch</p></div>
      <div style={{height:'10px'}}>
      <p style={{borderTop:'1px solid black',marginLeft:'-9%',marginRight:'-9%',paddingTop:'5px',paddingLeft:'20px'}} onClick={()=>setmodal2(false)}>Log Out</p>
      </div>
   </div>

             </Modal>
        </div>
     );
}
 
export default Navbar;