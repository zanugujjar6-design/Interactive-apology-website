import {useState} from "react"
import "./App.css"
const memories=[{url:"https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500",cap:"My favorite memory of us ❤️"},{url:"https://images.unsplash.com/photo-1529634597503-139d799a6838?w=500",cap:"You make my world brighter ✨"}]
const s1="https://media.tenor.com/2uyENRuvV-0AAAAi/tkthao219-bubududu.gif"
const s2="https://media.tenor.com/1UqsahXv1yMAAAAi/bubu-bubu-dudu.gif"
const s3="https://media.tenor.com/6n1x2I7R6yIAAAAj/bubu-dudu-sad.gif"
const s4="https://media.tenor.com/x3dN9uKq1B4AAAAi/bubu-dudu-love-you.gif"
export default function App(){
const [step,setStep]=useState(1);const [noPos,setNoPos]=useState({x:0,y:0});const [idx,setIdx]=useState(0);const [showLetter,setShowLetter]=useState(false)
const move=()=>setNoPos({x:Math.random()*140-70,y:Math.random()*70-35})
return(
<div className="main-bg">
<div className="hearts">{[...Array(20)].map((_,i)=><span key={i} style={{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`}}>💗</span>)}</div>
{step===1&&<div className="card"><img src={s1} className="sticker"/><h1>Hey<br/>My Life Norii!</h1><p>I've got something special to show you. I hope you'll like it</p><button className="btn" onClick={()=>setStep(2)}>Continue ❤️</button></div>}
{step===2&&<div className="card"><img src={s2} className="sticker"/><h1 className="small-h">Do you still love me?</h1><div className="no-box"><button className="btn" style={{width:"auto"}} onClick={()=>setStep(3)}>Yes 💖</button><button className="btn red moving" style={{left:`calc(55% + ${noPos.x}px)`,top:`${40+noPos.y}px`}} onMouseEnter={move} onClick={move}>No 😢</button></div></div>}
{step===3&&<div className="card"><img src={s3} className="sticker"/><h1 className="small-h">You still love me? Really? 🥺</h1><p>Are you sure you still love me? Please think again!</p><div className="row2"><button className="btn green" onClick={()=>setStep(4)}>Yes 😘</button><button className="btn red" onClick={()=>setStep(4)}>Of Course! 💕</button></div></div>}
{step===4&&<div className="card"><div className="mem-wrap"><img src={memories[idx].url} className="mem-img"/></div><p>{memories[idx].cap}</p><div className="nav"><button onClick={()=>setIdx(idx>0?idx-1:memories.length-1)}>‹</button><span>{idx+1} / {memories.length}</span><button onClick={()=>setIdx(idx<memories.length-1?idx+1:0)}>›</button></div><button className="btn purple" onClick={()=>setStep(5)}>Next ✨</button></div>}
{step===5&&<div className="card"><img src={s4} className="sticker big"/><h1>I love you<br/>so much! ❤️</h1>{!showLetter?<><p>I wanted to tell you how much you mean to me</p><button className="btn" onClick={()=>setShowLetter(true)}>Read My Letter 💌</button></>:<><div className="letter">My Dearest Norii,

I wanted to take a moment to tell you how much you mean to me. You are the most amazing person I have ever met.

Every moment with you is special. I am so sorry if I ever hurt you. You are My Life.

I love you more than words can express.

Forever Yours,
Azan ❤️</div><button className="btn green" onClick={()=>window.open("https://wa.me/?text=I%20love%20you%20Norii%20❤️")}>Send Love 💕</button></>}</div>}
</div>)}
