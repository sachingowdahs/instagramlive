import { useState,useEffect } from 'react'
import '../CSS/message.css'
import Arrow from '../images/downarrow.png'
import Edit from '../images/edit.png'
import Navbar from '../components/navbar'



const Message = () => {
let [color1,setcolor1]=useState('black')
let [color2,setcolor2]=useState('rgba(var(--b6a,219,219,219),1)')
let [borderbottom1,setborder1]=useState('black')
let [borderbottom2,setborder2]=useState('rgba(var(--b6a,219,219,219),1)')

let[messagelist,setmessagelist]=useState([])



useEffect(()=>{
    fetch('http://localhost:7777/message')
    .then(res=>{
     return   res.json()
    })
    .then(data=>{
        setmessagelist(data)
    })
},[])

let changecolor1=()=>{
    setcolor1('black',setcolor2('rgba(var(--b6a,219,219,219),1)'))
    setborder1('black',setborder2('rgba(var(--b6a,219,219,219),1)'))
}

let changecolor2=()=>{
    setcolor1('rgba(var(--b6a,219,219,219),1)',
    setcolor2('black'))
    setborder1('rgba(var(--b6a,219,219,219),1)',
    setborder2('black'))
}



    return ( 
        <div>
            <Navbar/>
       
    <div className="message">

<div className="msgcontent">
    <div style={{display:'flex',paddingTop:'14px',paddingBottom:'14px'}}>
<h6 style={{marginLeft:'15%'}}>sachingowda_sachin_ku..</h6>
<img src={Arrow} style={{width:'5%',height:'21px',marginLeft:'7.5%'}}></img>
<img src={Edit} style={{width:'6%',height:'21px',marginLeft:'7.5%'}}></img>
</div>
<div style={{display:'flex',borderTop:'1px solid rgba(var(--b6a,219,219,219),1)',paddingTop:'10px',marginBottom:'-2.7%'}}>
<h6 style={{paddingLeft:'6%',paddingRight:'6%',color:color1,borderBottom:'1px solid ',borderBottomColor:borderbottom1,paddingBottom:'15px'}} onClick={changecolor1}>PRIMARY</h6>
<h6 style={{paddingLeft:'6%',paddingRight:'6%',color:color2,borderBottom:'1px solid ',borderBottomColor:borderbottom2,}} onClick={changecolor2}>GENERAL</h6>
</div>

<div style={{borderTop:'1px solid rgba(var(--b6a,219,219,219),1)',}}>

<div className='messagelist'>
{messagelist.map((data)=>{
    return(
       <div style={{display:'flex',marginTop:'4%',marginBottom:'4%',marginLeft:'6%'}}>
           <img  style={{width:'60px',height:'60px',borderRadius:'50%'}}src={data.pimage} alt=""></img>
          <p style={{marginTop:'3%',marginLeft:'4%'}}>{data.name}</p>
    
</div>
    )
})}
</div>
</div>
</div>
</div>

    </div>
     );
}
 
export default Message;