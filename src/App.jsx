import { useState, useEffect, useRef } from "react";
import "./App.css";
export default function App(){
  const [page,setPage]=useState(0);
  const [pos,setPos]=useState({x:50,y:15});
  const [idx,setIdx]=useState(0);
  const [typed,setTyped]=useState("");
  const letterRef=useRef(null);
  const fullLetter=`My Dearest Love,

I'm writing this letter with a heart full of remorse and a mind filled with reflection. 🥺

I know I've hurt you, and for that, I am truly sorry. 💔🥺

Every moment we've shared has been precious to me, and the thought of causing you pain weighs heavily on my soul. 💗

Please forgive me Noori, you mean the whole world to me. Balu also misses you so much.

Forever yours,
Azan ❤️`;
  useEffect(()=>{ if(page===7){ let i=0; setTyped(""); const t=setInterval(()=>{ i++; setTyped(fullLetter.slice(0,i)); if(i>=fullLetter.length) clearInterval(t); if(letterRef.current) letterRef.current.scrollTop=letterRef.current.scrollHeight; }, 25); return ()=>clearInterval(t); } },[page]);
  const memories=["https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=400","https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400","https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=400","https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=400","https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400","https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=400","https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400","https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=400","https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=400"];
  const move=()=>setPos({x:Math.random()*60+5,y:Math.random()*50+5});
  return(
    <div className="main-bg">
      <div className="hearts">{[...Array(15)].map((_,i)=><span key={i} style={{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`}}>💗</span>)}</div>
      <div className="card">
        {page===0&&<><img className="sticker" src="https://media.tenor.com/2UYENRuvVysAAAAi/cute-bunny.gif"/><h1>Hey<br/>Cutiepie!</h1><p>Can we talk for a moment? There's something Important I want to tell you.</p><button className="btn" onClick={()=>setPage(1)}>Continue ♥</button></>}
        {page===1&&<><img className="sticker" src="https://media.tenor.com/CWHq5Nq_pWUAAAAi/milk-and-mocha-crying.gif"/><h1>An Honest<br/>Apology</h1><p>I know I hurt you... and I've been feeling bad about it.</p><button className="btn" onClick={()=>setPage(2)}>Next →</button></>}
        {page===2&&<><img className="sticker big" src="https://media.tenor.com/YeHCd0yKg3UAAAAj/bubu-dudu-sorry.gif"/><h1 className="small-h">I am sorry yrr 🥺</h1><p>Please mujhe maaf kr do ❤️</p><div className="row2"><button className="btn green" onClick={()=>setPage(4)}>YES ❤️</button><button className="btn red" onClick={()=>setPage(3)}>NO 🥺</button></div></>}
        {page===3&&<><img className="sticker" src="https://media.tenor.com/Q5CpwP1B0SMAAAAi/bubu-dudu.gif"/><h1 className="small-h">Are you sure? 🥺</h1><p>Try clicking "No" if you can...</p><div className="no-box"><button className="btn red moving" onMouseEnter={move} onTouchStart={move} style={{left:`${pos.x}%`,top:`${pos.y}%`}}>No</button></div><button className="btn green" onClick={()=>setPage(4)}>Forgive Me ❤️</button></>}
        {page===4&&<><img className="sticker big" src="https://media.tenor.com/0AVbKGYQ1dIAAAAj/bubu-dudu-bubu-dudu-bear.gif"/><h1>Thank you for hearing me out ❤️</h1><p>It means the absolute world to me. Let's look back at some of our special moments.</p><button className="btn" onClick={()=>setPage(5)}>View Memories 💕</button></>}
        {page===5&&<><h1>Our Little Memories 💗</h1><p className="small">Swipe or drag left/right to view our moments...</p><div className="mem-wrap"><img src={memories[idx]} className="mem-img"/></div><div className="nav"><button onClick={()=>setIdx(i=>i>0?i-1:8)}>‹</button><span>{idx+1} / 9</span><button onClick={()=>setIdx(i=>i<8?i+1:0)}>›</button></div><button className="btn" onClick={()=>setPage(6)}>Read My Letter →</button></>}
        {page===6&&<><img className="sticker" src="https://media.tenor.com/Vr3IhzAzFhoAAAAj/bubu-dudu-sweet.gif"/><h1>My Sorry Letter to You...</h1><p>I've been sitting here for hours, trying to find the right words...</p><button className="btn" onClick={()=>setPage(7)}>Continue reading...</button></>}
        {page===7&&<><h1>A Letter From My Heart</h1><div className="letter" ref={letterRef}>{typed}</div><button className="btn" onClick={()=>setPage(8)}>One Last Thing... 💕</button></>}
        {page===8&&<><img className="sticker big" src="https://media.tenor.com/lZc8p3y2b4sAAAAj/bubu-dudu-flowers.gif"/><h1>This flower will never wilt... 🌹</h1><p className="left">Just like a beautiful memory, my care and respect for you should never fade. I hope my actions can show you how sincerely I mean this apology. You deserve kindness, honesty, and understanding, and I want to do better.<br/><br/><b>You mean a lot to me ✨💕</b></p><button className="btn purple" onClick={()=>setPage(0)}>Start Over 🔄</button></>}
      </div>
    </div>
  )
}
