import {useState} from "react"
import "./App.css"

const s1="https://c.tenor.com/2uyENRuvV-0AAAAC/tkthao219-bubududu.gif"
const s2="https://c.tenor.com/C-lA1N1W0KQAAAAC/bubu-dudu-crying.gif"
const s3="https://c.tenor.com/x3dN9uKq1B4AAAAC/bubu-dudu-love-you.gif"

export default function App(){
const [step,setStep]=useState(1)

return(
<div className="main-bg">
<div className="hearts">{[...Array(20)].map((_,i)=><span key={i} style={{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`}}>💗</span>)}</div>

{step===1&&<div className="card"><img src={s1} className="sticker"/><h1>Hey<br/>My Life Norii!</h1><p>Can we talk for a moment? There's something Important I want to tell you.</p><button className="btn" onClick={()=>setStep(2)}>Continue ❤️</button></div>}

{step===2&&<div className="card"><img src={s2} className="sticker"/><h1>I'm So Sorry<br/>My Life Norii 🥺</h1><p>I never meant to hurt you. You are my everything. Please forgive me?</p><button className="btn green" onClick={()=>setStep(3)}>Please Forgive Me? 💗</button></div>}

{step===3&&<div className="card"><img src={s3} className="sticker big"/><h1>I Love You<br/>So Much ❤️</h1><div className="letter">My Dearest Norii,<br/><br/>I am so sorry jaan. I was wrong. You are My Life. Please forgive your Azan. I promise I will never hurt you again.<br/><br/>Forever Yours,<br/>Azan ❤️</div><button className="btn green" onClick={()=>window.open("https://wa.me/?text=Norii%20Please%20Forgive%20Me%20❤️")}>Send Love 💕</button></div>}

</div>)}
