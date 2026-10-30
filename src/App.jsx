import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(0);
  const [mem, setMem] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const moveNo = () => {
    setNoPos({ x: Math.random() * 200 - 100, y: Math.random() * 100 - 50 });
  };

  return (
    <div className="app">
      {page === 0 && (
        <div className="card">
          <div className="emoji">🥺</div>
          <h1>Hey<br/>Cutiepie!</h1>
          <p>Can we talk for a moment? There's something important I want to tell you.</p>
          <button onClick={() => setPage(1)}>Continue ♥</button>
        </div>
      )}
      {page === 1 && (
        <div className="card">
          <div className="emoji">😿</div>
          <h1>An Honest<br/>Apology</h1>
          <p>I know I hurt you... and I've been feeling terrible about it.</p>
          <button onClick={() => setPage(2)}>Next →</button>
        </div>
      )}
      {page === 2 && (
        <div className="card">
          <div className="emoji">🐱💔🐻</div>
          <h1>I am sorry yrr 😔</h1>
          <p>Please mujhe maaf kr do Noori ❤️</p>
          <div className="row">
            <button className="yes" onClick={() => setPage(4)}>YES ❤️</button>
            <button className="no" onClick={() => setPage(3)}>NO 🥺</button>
          </div>
        </div>
      )}
      {page === 3 && (
        <div className="card">
          <div className="emoji">😭</div>
          <h1 style={{color:'#d32f2f'}}>Are you sure? 🥺</h1>
          <div className="noBox">
            <button className="no moving" style={{transform:`translate(${noPos.x}px, ${noPos.y}px)`}} onMouseEnter={moveNo} onTouchStart={moveNo} onClick={moveNo}>No</button>
          </div>
          <button className="yes big" onClick={() => setPage(4)}>Forgive Me ❤️</button>
        </div>
      )}
      {page === 4 && (
        <div className="card">
          <div className="emoji">💕</div>
          <h1>Thank you for hearing me out ❤️</h1>
          <p>It means the absolute world to me.</p>
          <button onClick={() => setPage(5)}>View Memories 💕</button>
        </div>
      )}
      {page === 5 && (
        <div className="card">
          <h1>Our Little Memories 💗</h1>
          <div className="memBox">💑<br/><span>Memory {mem+1}</span></div>
          <div className="row center">
            <button className="circle" onClick={()=>setMem((mem-1+9)%9)}>{"<"}</button>
            <span>{mem+1} / 9</span>
            <button className="circle" onClick={()=>setMem((mem+1)%9)}>{">"}</button>
          </div>
          <button onClick={() => setPage(6)}>Read My Letter →</button>
        </div>
      )}
      {page === 6 && (
        <div className="card">
          <div className="emoji">🧸🌹</div>
          <h1>My Sorry Letter to You...</h1>
          <button onClick={() => setPage(7)}>Continue reading...</button>
        </div>
      )}
      {page === 7 && (
        <div className="card">
          <h1>A Letter From My Heart</h1>
          <div className="letter">My Dearest Noori,<br/><br/>I'm writing this with a heart full of remorse 🥺<br/><br/>Yeah, sometimes I do things that make you angry, I'm really sorry Noori, Your Azan loves you a lot 🥺❤️<br/><br/>You mean a lot to me ✨</div>
          <button onClick={() => setPage(8)}>One Last Thing... 💕</button>
        </div>
      )}
      {page === 8 && (
        <div className="card">
          <div className="emoji">🌹</div>
          <h1>This flower will never wilt... 🌹</h1>
          <p style={{textAlign:'left', fontSize:'13px'}}>Just like a beautiful memory, my care and respect for you should never fade.<br/><br/><b>You mean a lot to me Noori ✨</b></p>
          <button onClick={() => setPage(0)} className="purple">Start Over 🔄</button>
        </div>
      )}
    </div>
  );
}
export default App;
