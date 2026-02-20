'use client'

export default function Home() {
  return (
    <div style={{minHeight:'100vh',background:'#020817',color:'#fff',fontFamily:'sans-serif'}}>
      <nav style={{position:'fixed',top:0,width:'100%',zIndex:100,background:'rgba(2,8,23,0.9)',borderBottom:'1px solid rgba(255,255,255,0.07)',padding:'0 48px',height:64,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{fontSize:20,fontWeight:700,background:'linear-gradient(135deg,#60a5fa,#a78bfa)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
          Gemini Wrapper
        </div>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <a href="/login" style={{background:'linear-gradient(135deg,#3b82f6,#8b5cf6)',color:'#fff',textDecoration:'none',padding:'10px 22px',borderRadius:10,fontSize:14,fontWeight:600}}>무료로 시작하기</a>
        </div>
      </nav>
      <section style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'120px 20px 60px'}}>
        <h1 style={{fontSize:'clamp(48px,8vw,96px)',fontWeight:800,lineHeight:1.05,letterSpacing:'-3px',marginBottom:24,margin:'0 0 24px'}}>
          AI 채팅
        </h1>
        <p style={{fontSize:20,color:'#64748b',maxWidth:560,margin:'0 auto 40px',lineHeight:1.7}}>
          Google Gemini의 강력한 AI를 손쉽게 활용하세요
        </p>
        <a href="/login" style={{background:'linear-gradient(135deg,#3b82f6,#8b5cf6)',color:'#fff',padding:'16px 36px',borderRadius:14,fontSize:17,fontWeight:600,textDecoration:'none',display:'inline-block'}}>무료로 시작하기</a>
      </section>
    </div>
  )
}
