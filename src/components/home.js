import "../CSS/home.css"
import { useEffect, useState } from "react"
import Heart from '../images/heart.png'
import Redheart from '../images/redheart.png'
import Message from '../images/message.png'
import Share from '../images/share.png'
import Save from '../images/save.png'
import Saved from '../images/save2.png'
import Navbar from '../components/navbar'
import Emoji from '../images/emoji.png'
import Virat from '../images/virat.jpg'
import Modal from 'react-modal/lib/components/Modal';


const Home = () => {

  let [homeprofile,sethomeprofile]=useState([])
  


  let [modal,setmodal]=useState(false)
  let [modal1,setmodal1]=useState(false)
  let [modal2,setmodal2]=useState(false)
  let [modal3,setmodal3]=useState(false)
  let [modal4,setmodal4]=useState(false)
  let [message,setmessage]=useState(false)


  let [hidden,sethidden]=useState(false)

  let [heart,setheart]=useState(Heart)
  let [save,setsave]=useState(Save)

  let [count,setcount]=useState(33)

let addlikes=()=>{
  if(heart==Heart){
    setheart(Redheart)
    setcount(++count)
  }
  else{
    setheart(Heart)
    setcount(--count)
  }
}

let saved=()=>{
  if(save==Save){
    setsave(Saved)
  }
  else{
    setsave(Save)
  }
}

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

let [stories,setstories]=useState([])

  useEffect(()=>{
    fetch('http://localhost:7777/story')
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      setstories(data)
    })
  },[])

  let [home,sethome]=useState([])
  let [numb,setnumb]=useState(6)

  useEffect(()=>{
    setTimeout(()=>{
      fetch('http://localhost:7777/Home')
      .then(res=>{
        return res.json()
      })
      .then(data=>{
        sethome(data)
      })
    },1000)
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      fetch('http://localhost:7777/Homeprofile')
      .then(res=>{
        return res.json()
      })
      .then(data=>{
        sethomeprofile(data)
      })
    },100)
  },[])

    return ( 
      <div>
        <Navbar/>
        <div className="home" >
          <div >
            <div className="stories">
              {stories.map((data)=>{
                return (
                  <div className="story">
                  <img className="storiesimage" src={data.image}></img>
                <p style={{width:'65px'}} onClick={()=>setnumb(10)}>{data.name.substring(0,numb)}...</p>
                </div>
                )
              })}
           
          
          </div>

          {home.map((data)=>{
            return (
              <div className="homecontent">
              <div className="homecontenttitle">
                 <img className="contentimage" src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"></img>
                 <p className="title">{data.title}</p>
                 <p style={{fontSize:'23px',fontWeight:'bold',marginRight:'20px'}} onClick={()=>{sethidden(true)}}>...</p>
              </div>
               <img src={data.image} style={{width:'599px'}}></img> 
               <div style={{marginTop:'2.5%',marginBottom:'2.5%'}}>
                 <img src={heart} onClick={addlikes} style={{width:'3.9%',marginLeft:'14px'}}></img>
                 <svg onClick={()=>{setmessage(true)}} style={{marginLeft:'3.9%'}} aria-label="Comment" class="_8-yf5 " color="black" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                
                 <svg style={{width:'3.9%',marginLeft:'14px'}} aria-label="Share Post" class="_8-yf5 " color="black" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                 
                 <svg onClick={saved}style={{width:'3.9%',marginLeft:'440px'}} aria-label="Save" class="_8-yf5 " color="black" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>

                 <Modal isOpen={message}
                     onRequestClose={()=>setmessage(false)}
                  style={{
                  overlay:{ backgroundColor:'transparent'},
                  content:{marginLeft:'20%',marginRight:'20%',marginTop:'5%',borderRadius:'3%',height:'500px'}
                  }
                  }>
                  </Modal>
              </div>
              
               <div style={{marginLeft:'2.5%'}}>
               <p>{count} likes</p>
               <p style={{fontWeight:'bold'}}>{data.title} <span style={{fontFamily:'inherit'}}>more</span></p>
               <p>view 12 Comment</p>
               <p style={{borderBottom:'1px solid rgba(var(--b6a,219,219,219),1)' ,paddingBottom:'16px',fontSize:'10px',fontWeight:'bold',color:'#a2a9b3'}}>1 HOUR AGO</p>
               </div>
               <div style={{display:'flex'}}>
                 <img  style={{width:'4.2%',marginBottom:'2%',marginLeft:'2%'}} src={Emoji}></img>
                <input type="text" placeholder="Add a comment..." style={{border:'1px solid white',marginTop:'-15px',marginLeft:'14px'}}></input>
                <h6 style={{color:'rgb(0, 153, 204)',marginLeft:'300px'}}>Post</h6>
               </div>
             </div>
            )
          })}
        
          </div>

          <div className="homeprofile">
         <div style={{display:'flex'}}>
         <div style={{width:'200px',display:'flex'}}>
           <img src={Virat} alt="" style={{width:'62px',height:'62px',borderRadius:'50%'}}/>
           <div style={{marginLeft:'15px',marginTop:'2%'}}><h6>{currentaccount.fullname}</h6>
           <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-2.2%'}}>{currentaccount.username}</p></div>
           </div>
           <h6 style={{marginLeft:'28%',marginTop:'7%',fontSize:'13px',color:'rgb(0, 153, 204)'}}>Switch</h6>
         </div>
         <div style={{display:'flex'}}>
         <h6 style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'7%'}}>Suggestions For You</h6>
         <h6 style={{marginTop:'7.8%',fontSize:'13px',marginLeft:'140px'}}>See All</h6>
         </div>


       
            <div style={{display:'flex'}}>
            <div style={{width:'200px',display:'flex'}}>
            <img src='https://th.bing.com/th/id/R.cd7471bb58b78e85e5347ed48e3b51d7?rik=iA88wCmUTjMn0g&riu=http%3a%2f%2f2.bp.blogspot.com%2f_3DSZkDmofok%2fTVDCyQaF9uI%2fAAAAAAAACw4%2fvhBwyS0kt_s%2fs1600%2fupendra-1-27.jpg&ehk=KZmKUyZVBw9HqulvUIPC%2f%2bvMhdhwl0slcDK8DaMVzwM%3d&risl=&pid=ImgRaw&r=0' 
            onMouseOver={()=>{setmodal(true)}}
            onMouseLeave={()=>{setTimeout(()=>{setmodal(false)}) }} alt="" style={{width:'35px',height:'35px',borderRadius:'50%',marginTop:'2.5%'}}/>
            <div style={{marginLeft:'14px',marginTop:'2%',}} onMouseOver={()=>{setmodal(true)}}
            onMouseLeave={()=>{setTimeout(()=>{setmodal(false)}) }}><h6 style={{fontSize:'14px'}}>praveen_kumar</h6>
            <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-8.2%',fontSize:'13px'}}>New to Instagram</p></div>
            </div>
            <h6 style={{marginLeft:'3%',marginTop:'6%',fontSize:'13px',color:'rgb(0, 153, 204)',marginLeft:'90px'}}>Follow</h6>
          </div>


          <div style={{display:'flex'}}>
            <div style={{width:'200px',display:'flex'}}>
            <img src='https://2.bp.blogspot.com/-UmSEOh0CSN4/WlD0JBHMrMI/AAAAAAAAlrY/32a4VUciMNMyNFTS3jbXjspl0cxh1skHwCLcBGAs/s1600/Virat-Kohli-Images-HD-12.jpg' 
            onMouseOver={()=>{setmodal1(true)}}
            onMouseLeave={()=>{setTimeout(()=>{setmodal1(false)}) }} alt="" style={{width:'35px',height:'35px',borderRadius:'50%',marginTop:'2.5%'}}/>
            <div style={{marginLeft:'14px',marginTop:'2%',}} onMouseOver={()=>{setmodal1(true)}}
            onMouseLeave={()=>{setTimeout(()=>{setmodal1(false)}) }}><h6 style={{fontSize:'14px'}}>sidlinge_gowda</h6>
            <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-8.2%',fontSize:'13px'}}>New to Instagram</p></div>
            </div>
            <h6 style={{marginLeft:'3%',marginTop:'6%',fontSize:'13px',color:'rgb(0, 153, 204)',marginLeft:'90px'}}>Follow</h6>
          </div>


          <div style={{display:'flex'}}>
            <div style={{width:'200px',display:'flex'}}>
            <img src='https://hddesktopwallpapers.in/wp-content/uploads/2015/09/raindrops-images.jpg' 
            onMouseOver={()=>{setmodal2(true)}}
            onMouseLeave={()=>{setTimeout(()=>{setmodal2(false)}) }} alt="" style={{width:'35px',height:'35px',borderRadius:'50%',marginTop:'2.5%'}}/>
            <div style={{marginLeft:'14px',marginTop:'2%',}} onMouseOver={()=>{setmodal2(true)}}
            onMouseLeave={()=>{setTimeout(()=>{setmodal2(false)}) }}><h6 style={{fontSize:'14px'}}>sanjay_kumar</h6>
            <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-8.2%',fontSize:'13px'}}>New to Instagram</p></div>
            </div>
            <h6 style={{marginLeft:'3%',marginTop:'6%',fontSize:'13px',color:'rgb(0, 153, 204)',marginLeft:'90px'}}>Follow</h6>
          </div>


          <div style={{display:'flex'}}>
            <div style={{width:'200px',display:'flex'}}>
            <img src='https://i1.wp.com/godofindia.com/wp-content/uploads/2017/09/gud-evening.jpg' 
            onMouseOver={()=>{setmodal3(true)}}
            onMouseLeave={()=>{setTimeout(()=>{setmodal3(false)}) }} alt="" style={{width:'35px',height:'35px',borderRadius:'50%',marginTop:'2.5%'}}/>
            <div style={{marginLeft:'14px',marginTop:'2%',}} onMouseOver={()=>{setmodal3(true)}}
            onMouseLeave={()=>{setTimeout(()=>{setmodal3(false)}) }}><h6 style={{fontSize:'14px'}}>yogesh_h_m</h6>
            <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-8.2%',fontSize:'13px'}}>New to Instagram</p></div>
            </div>
            <h6 style={{marginLeft:'3%',marginTop:'6%',fontSize:'13px',color:'rgb(0, 153, 204)',marginLeft:'90px'}}>Follow</h6>
          </div>


          <div style={{display:'flex'}}>
            <div style={{width:'200px',display:'flex'}}>
            <img src='https://wallpapercave.com/wp/wp2555647.jpg' 
            onMouseOver={()=>{setmodal4(true)}}
            onMouseOut={()=>{setTimeout(()=>{setmodal4(false)}) }} alt="" style={{width:'35px',height:'35px',borderRadius:'50%',marginTop:'2.5%'}}/>
            <div style={{marginLeft:'14px',marginTop:'2%',}} onMouseOver={()=>{setmodal4(true)}}
            onMouseOut={()=>{setTimeout(()=>{setmodal4(false)}) }}><h6 style={{fontSize:'14px'}}>suman_raj</h6>
            <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-8.2%',fontSize:'13px'}}>New to Instagram</p></div>
            </div>
            <h6 style={{marginLeft:'3%',marginTop:'6%',fontSize:'13px',color:'rgb(0, 153, 204)',marginLeft:'90px'}}>Follow</h6>
          </div>


        
         
          </div>

          <Modal isOpen={modal}
           style={
            {
               overlay:{
                  backgroundColor:'transparent'
               },
               content:{marginLeft:'62%',marginTop:'1.2%',borderRadius:'3%',height:'360px',width:'420px',marginTop:'15%',padding:'0px'}
            }
         }>
             
           <div>
             <div style={{display:'flex',borderBottom:'1px solid rgba(var(--f52,142,142,142),1)',paddingLeft:'4%',marginTop:'2%'}}>
             <img src='https://th.bing.com/th/id/R.cd7471bb58b78e85e5347ed48e3b51d7?rik=iA88wCmUTjMn0g&riu=http%3a%2f%2f2.bp.blogspot.com%2f_3DSZkDmofok%2fTVDCyQaF9uI%2fAAAAAAAACw4%2fvhBwyS0kt_s%2fs1600%2fupendra-1-27.jpg&ehk=KZmKUyZVBw9HqulvUIPC%2f%2bvMhdhwl0slcDK8DaMVzwM%3d&risl=&pid=ImgRaw&r=0' style={{width:'55px',height:'55px',borderRadius:'50%',marginTop:'2%'}}/>
             <div style={{marginLeft:'4%'}}>
             <h6 style={{fontSize:'14px'}}>praveen_kumar</h6>
            <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-3.2%',fontSize:'14px'}}>praveenUV</p>
            <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-1.2%',fontSize:'14px'}}>followed by siddu_gowda and 4 others</p>
             </div>
             </div>
             <div style={{display:'flex',marginTop:'3%'}}>
               <div style={{margin:'0% 11%'}}>
                 <h6 style={{padding:'0% 18%'}}>0</h6><p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-18%',fontSize:'14px'}}>posts</p>
             </div>
               <div style={{margin:'0% 11%'}}>
                 <h6 style={{padding:'0% 18%'}}>1.2m</h6><p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-10%',fontSize:'14px'}}>followers</p>
                 </div>
               <div style={{margin:'0% 11%'}}>
               <h6 style={{padding:'0% 18%'}} >155</h6><p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-10%',fontSize:'14px'}}>following</p>
               </div>

             </div>

             <div style={{display:'flex'}}>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'139px',height:'124px'}} ></img>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'139px',height:'124px'}} ></img>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'139px',height:'124px'}} ></img>

             </div>

             <h6 style={{color:'white',marginTop:'3.5%',backgroundColor:'rgb(0, 153, 204)',padding:'2% 0%',marginLeft:'4%',marginRight:'4%',textAlign:'center',borderRadius:'5px'}}>Follow</h6>
           </div>
         </Modal>


<Modal isOpen={modal1}
           style={
            {
               overlay:{
                  backgroundColor:'transparent'
               },
               content:{marginLeft:'62%',marginTop:'1.2%',borderRadius:'3%',height:'360px',width:'420px',marginTop:'18.5%',padding:'0px'}
            }
         }>
           <div>
             <div style={{display:'flex',borderBottom:'1px solid rgba(var(--f52,142,142,142),1)',paddingLeft:'4%',marginTop:'2%'}}>
             <img src='https://2.bp.blogspot.com/-UmSEOh0CSN4/WlD0JBHMrMI/AAAAAAAAlrY/32a4VUciMNMyNFTS3jbXjspl0cxh1skHwCLcBGAs/s1600/Virat-Kohli-Images-HD-12.jpg' style={{width:'55px',height:'55px',borderRadius:'50%',marginTop:'2%'}}/>
             <div style={{marginLeft:'4%'}}>
             <h6 style={{fontSize:'14px'}}>sidlinge_gowda</h6>
            <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-3.2%',fontSize:'14px'}}>siddu</p>
            <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-1.2%',fontSize:'14px'}}>followed by praveen_kumar and 5 others</p>
             </div>
             </div>
             <div style={{display:'flex',marginTop:'3%'}}>
               <div style={{margin:'0% 11%'}}>
                 <h6 style={{padding:'0% 18%'}}>5</h6><p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-18%',fontSize:'14px'}}>posts</p>
             </div>
               <div style={{margin:'0% 11%'}}>
                 <h6 style={{padding:'0% 18%'}}>354</h6><p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-10%',fontSize:'14px'}}>followers</p>
                 </div>
               <div style={{margin:'0% 11%'}}>
               <h6 style={{padding:'0% 18%'}} >134</h6><p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-10%',fontSize:'14px'}}>following</p>
               </div>

             </div>

             <div style={{display:'flex'}}>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'139px',height:'124px'}} ></img>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'139px',height:'124px'}} ></img>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'139px',height:'124px'}} ></img>

             </div>

             <h6 style={{color:'white',marginTop:'3.5%',backgroundColor:'rgb(0, 153, 204)',padding:'2% 0%',marginLeft:'4%',marginRight:'4%',textAlign:'center',borderRadius:'5px'}}>Follow</h6>
           </div>
         </Modal>


<Modal isOpen={modal2}
           style={
            {
               overlay:{
                  backgroundColor:'transparent'
               },
               content:{marginLeft:'62%',marginTop:'1.2%',borderRadius:'3%',height:'360px',width:'420px',
               marginTop:'21%',padding:'0px'}
            }
         }>
           <div>
             <div style={{display:'flex',borderBottom:'1px solid rgba(var(--f52,142,142,142),1)',paddingLeft:'4%',marginTop:'2%'}}>
             <img src='https://hddesktopwallpapers.in/wp-content/uploads/2015/09/raindrops-images.jpg' style={{width:'55px',height:'55px',borderRadius:'50%',marginTop:'2%'}}/>
             <div style={{marginLeft:'4%'}}>
             <h6 style={{fontSize:'14px'}}>sanjay_kumar</h6>
            <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-3.2%',fontSize:'14px'}}>sanjay</p>
            <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-1.2%',fontSize:'14px'}}>followed by siddu_gowda and 2 others</p>
             </div>
             </div>
             <div style={{display:'flex',marginTop:'3%'}}>
               <div style={{margin:'0% 11%'}}>
                 <h6 style={{padding:'0% 18%'}}>4</h6><p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-18%',fontSize:'14px'}}>posts</p>
             </div>
               <div style={{margin:'0% 11%'}}>
                 <h6 style={{padding:'0% 18%'}}>234</h6><p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-10%',fontSize:'14px'}}>followers</p>
                 </div>
               <div style={{margin:'0% 11%'}}>
               <h6 style={{padding:'0% 18%'}} >155</h6><p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-10%',fontSize:'14px'}}>following</p>
               </div>

             </div>

             <div style={{display:'flex'}}>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'139px',height:'124px'}} ></img>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'139px',height:'124px'}} ></img>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'139px',height:'124px'}} ></img>

             </div>

             <h6 style={{color:'white',marginTop:'3.5%',backgroundColor:'rgb(0, 153, 204)',padding:'2% 0%',marginLeft:'4%',marginRight:'4%',textAlign:'center',borderRadius:'5px'}}>Follow</h6>
           </div>
         </Modal>


<Modal isOpen={modal3}
           style={
            {
               overlay:{
                  backgroundColor:'transparent'
               },
               content:{marginLeft:'62%',marginTop:'-0.5%',borderRadius:'3%',height:'360px',width:'420px',padding:'0px'}
            }
         }>
           <div>
             <div style={{display:'flex',borderBottom:'1px solid rgba(var(--f52,142,142,142),1)',paddingLeft:'4%',marginTop:'2%'}}>
             <img src='https://i1.wp.com/godofindia.com/wp-content/uploads/2017/09/gud-evening.jpg' style={{width:'55px',height:'55px',borderRadius:'50%',marginTop:'2%'}}/>
             <div style={{marginLeft:'4%'}}>
             <h6 style={{fontSize:'14px'}}>yogesh_h_m</h6>
            <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-3.2%',fontSize:'14px'}}>yogeshyogi</p>
            <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-1.2%',fontSize:'14px'}}>followed by siddu_gowda and 8 others</p>
             </div>
             </div>
             <div style={{display:'flex',marginTop:'3%'}}>
               <div style={{margin:'0% 11%'}}>
                 <h6 style={{padding:'0% 18%'}}>2</h6><p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-18%',fontSize:'14px'}}>posts</p>
             </div>
               <div style={{margin:'0% 11%'}}>
                 <h6 style={{padding:'0% 18%'}}>382</h6><p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-10%',fontSize:'14px'}}>followers</p>
                 </div>
               <div style={{margin:'0% 11%'}}>
               <h6 style={{padding:'0% 18%'}} >265</h6><p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-10%',fontSize:'14px'}}>following</p>
               </div>

             </div>

             <div style={{display:'flex'}}>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'139px',height:'124px'}} ></img>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'139px',height:'124px'}} ></img>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'139px',height:'124px'}} ></img>

             </div>

             <h6 style={{color:'white',marginTop:'3.5%',backgroundColor:'rgb(0, 153, 204)',padding:'2% 0%',marginLeft:'4%',marginRight:'4%',textAlign:'center',borderRadius:'5px'}}>Follow</h6>
           </div>
         </Modal>


<Modal isOpen={modal4}
           style={
            {
               overlay:{
                  backgroundColor:'transparent'
               },
               content:{marginLeft:'62%',marginTop:'3%',borderRadius:'3%',height:'360px',width:'420px',padding:'0px'}
            }
         }>
           <div>
             <div style={{display:'flex',borderBottom:'1px solid rgba(var(--f52,142,142,142),1)',paddingLeft:'4%',marginTop:'2%'}}>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'55px',height:'55px',borderRadius:'50%',marginTop:'2%'}}/>
             <div style={{marginLeft:'4%'}}>
             <h6 style={{fontSize:'14px'}}>suman_raj</h6>
            <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-3.2%',fontSize:'14px'}}>suman</p>
            <p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-1.2%',fontSize:'14px'}}>followed by siddu_gowda and 1 others</p>
             </div>
             </div>
             <div style={{display:'flex',marginTop:'3%'}}>
               <div style={{margin:'0% 11%'}}>
                 <h6 style={{padding:'0% 18%'}}>12</h6><p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-18%',fontSize:'14px'}}>posts</p>
             </div>
               <div style={{margin:'0% 11%'}}>
                 <h6 style={{padding:'0% 18%'}}>124</h6><p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-10%',fontSize:'14px'}}>followers</p>
                 </div>
               <div style={{margin:'0% 11%'}}>
               <h6 style={{padding:'0% 18%'}} >134</h6><p style={{color:'rgba(var(--f52,142,142,142),1)',marginTop:'-10%',fontSize:'14px'}}>following</p>
               </div>

             </div>

             <div style={{display:'flex'}}>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'139px',height:'124px'}} ></img>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'139px',height:'124px'}} ></img>
             <img src='https://wallpapercave.com/wp/wp2555647.jpg' style={{width:'139px',height:'124px'}} ></img>

             </div>

             <h6 style={{color:'white',marginTop:'3.5%',backgroundColor:'rgb(0, 153, 204)',padding:'2% 0%',marginLeft:'4%',marginRight:'4%',textAlign:'center',borderRadius:'5px'}}>Follow</h6>
           </div>
         </Modal>

         <Modal
         isOpen={hidden}
         onRequestClose={()=>sethidden(false)}
         style={{
           overlay:{
            backgroundColor:'rgba(0,0,0,.85)'
           },
           content:{marginTop:'9%',padding:'0px',marginLeft:'35%',marginRight:'35%',marginBottom:'9%',borderRadius:'4.5%',height:'395px'}
         }}>

           <div>
             <h6 style={{textAlign:'center', borderBottom:'1px solid black',paddingTop:'10px',paddingBottom:'12px'}}>Report</h6>
             <h6 style={{textAlign:'center',borderBottom:'1px solid black',paddingTop:'5px',paddingBottom:'12px'}}>Unfollow</h6>
             <p style={{textAlign:'center',borderBottom:'1px solid black',paddingBottom:'10px'}}>Go to post</p>
             <p style={{textAlign:'center',borderBottom:'1px solid black',paddingBottom:'10px'}}>Tagged accounts</p>
             <p style={{textAlign:'center',borderBottom:'1px solid black',paddingBottom:'10px'}}>Share to..</p>
             <p style={{textAlign:'center',borderBottom:'1px solid black',paddingBottom:'10px'}}>Copy Link</p>
             <p style={{textAlign:'center',borderBottom:'1px solid black',paddingBottom:'10px'}}>Embed</p>
             <p style={{textAlign:'center',}}>Cancel</p>
           </div>
         </Modal>
         </div>
        </div>
     );
}
 
export default Home;