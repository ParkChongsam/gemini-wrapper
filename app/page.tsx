'use client'
import Link from 'next/link'

export default function Home() {
    return (
          <main style={{minHeight:'100vh',background:'#020817',color:'#fff',fontFamily:'-apple-system,BlinkMacSystemFont,sans-serif',margin:0}}>
                  <nav style={{position:'fixed',top:0,width:'100%',zIndex:100,backdropFilter:'blur(20px)',background:'rgba(2,8,23,0.85)',borderBottom:'1px solid rgba(255,255,255,0.07)',padding:'0 48px',height:64,display:'flex',alignItems:'center',justifyContent:'space-between',boxSizing:'border-box'}}>
                            <div style={{fontSize:20,fontWeight:700,background:'linear-gradient(135deg,#60a5fa,#a78bfa)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>✨ Gemini Wrapper</div>div>
                            <div style={{display:'flex',gap:8,alignItems:'center'}}>
                                        <a href="#features" style={{color:'#94a3b8',textDecoration:'none',padding:'8px 16px',borderRadius:8,fontSize:14}}>기능</a>a>
                                        <a href="#pricing" style={{color:'#94a3b8',textDecoration:'none',padding:'8px 16px',borderRadius:8,fontSize:14}}>요금제</a>a>
                                        <a href="/login" style={{background:'linear-gradient(135deg,#3b82f6,#8b5cf6)',color:'#fff',textDecoration:'none',padding:'10px 22px',borderRadius:10,fontSize:14,fontWeight:600}}>무료로 시작하기</a>a>
                            </div>div>
                  </nav>nav>

                  <section style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'120px 20px 60px'}}>
                            <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(59,130,246,0.1)',border:'1px solid rgba(59,130,246,0.3)',color:'#60a5fa',padding:'6px 18px',borderRadius:100,fontSize:13,fontWeight:500,marginBottom:28}}>🚀 Powered by Google Gemini 1.5 Flash</div>div>
                            <h1 style={{fontSize:'clamp(48px,8vw,96px)',fontWeight:800,lineHeight:1.05,letterSpacing:'-3px',marginBottom:24,margin:'0 0 24px'}}>
                                        AI 채팅을<br/>
                                        <span style={{background:'linear-gradient(135deg,#60a5fa,#a78bfa,#f472b6)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>더 스마트하게</span>span>
                            </h1>h1>
                            <p style={{fontSize:20,color:'#64748b',maxWidth:560,margin:'0 auto 40px',lineHeight:1.7}}>Google Gemini의 강력한 AI를 손쉽게 활용하세요. 로그인 한 번으로 무제한 AI 대화를 시작하세요.</p>p>
                            <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
                                        <a href="/login" style={{background:'linear-gradient(135deg,#3b82f6,#8b5cf6)',color:'#fff',padding:'16px 36px',borderRadius:14,fontSize:17,fontWeight:600,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:8}}>무료로 시작하기 →</a>a>
                                        <a href="#pricing" style={{border:'1px solid rgba(255,255,255,0.12)',color:'#94a3b8',padding:'16px 36px',borderRadius:14,fontSize:17,fontWeight:500,textDecoration:'none'}}>요금제 보기</a>a>
                            </div>div>
                  </section>section>

                  <section style={{padding:'0 20px 80px',maxWidth:900,margin:'0 auto'}}>
                            <div style={{background:'#0f172a',border:'1px solid rgba(255,255,255,0.08)',borderRadius:20,overflow:'hidden',boxShadow:'0 40px 80px rgba(0,0,0,0.5)'}}>
                                        <div style={{background:'#1e293b',padding:'14px 20px',display:'flex',alignItems:'center',gap:8,borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
                                                      <div style={{width:12,height:12,borderRadius:'50%',background:'#ef4444'}}></div>div>
                                                      <div style={{width:12,height:12,borderRadius:'50%',background:'#f59e0b'}}></div>div>
                                                      <div style={{width:12,height:12,borderRadius:'50%',background:'#22c55e'}}></div>div>
                                                      <div style={{flex:1,textAlign:'center',color:'#475569',fontSize:13}}>Gemini Wrapper — 대시보드</div>div>
                                        </div>div>
                                        <div style={{padding:24,display:'flex',flexDirection:'column',gap:16,minHeight:300}}>
                                                      <div style={{display:'flex',gap:10,maxWidth:'75%'}}>
                                                                      <div style={{width:32,height:32,borderRadius:'50%',background:'linear-gradient(135deg,#3b82f6,#8b5cf6)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:14}}>✨</div>div>
                                                                      <div style={{background:'#1e293b',padding:'12px 16px',borderRadius:16,borderBottomLeftRadius:4,fontSize:14,lineHeight:1.6,color:'#e2e8f0'}}>안녕하세요! Gemini AI입니다. 무엇이든 물어보세요. Next.js SaaS 구축부터 코드 리뷰까지 도와드릴게요! 🚀</div>div>
                                                      </div>div>
                                                      <div style={{display:'flex',gap:10,maxWidth:'75%',alignSelf:'flex-end',flexDirection:'row-reverse'}}>
                                                                      <div style={{width:32,height:32,borderRadius:'50%',background:'linear-gradient(135deg,#6366f1,#a855f7)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:14}}>👤</div>div>
                                                                      <div style={{background:'linear-gradient(135deg,#3b82f6,#6366f1)',padding:'12px 16px',borderRadius:16,borderBottomRightRadius:4,fontSize:14,lineHeight:1.6,color:'#fff'}}>Next.js로 SaaS 만드는 법 알려줘</div>div>
                                                      </div>div>
                                                      <div style={{display:'flex',gap:10,maxWidth:'85%'}}>
                                                                      <div style={{width:32,height:32,borderRadius:'50%',background:'linear-gradient(135deg,#3b82f6,#8b5cf6)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:14}}>✨</div>div>
                                                                      <div style={{background:'#1e293b',padding:'12px 16px',borderRadius:16,borderBottomLeftRadius:4,fontSize:14,lineHeight:1.6,color:'#e2e8f0'}}>Next.js SaaS는 3단계로 완성돼요!<br/>1️⃣ 인증 — Supabase + Google OAuth<br/>2️⃣ 결제 — Polar.sh 구독 플랜<br/>3️⃣ 배포 — Vercel 원클릭 배포<br/><br/>각 단계 자세히 설명해드릴까요?</div>div>
                                                      </div>div>
                                        </div>div>
                            </div>div>
                  </section>section>

                  <section id="features" style={{padding:'80px 20px',maxWidth:1100,margin:'0 auto'}}>
                            <div style={{textAlign:'center',marginBottom:48}}>
                                        <div style={{display:'inline-block',background:'rgba(139,92,246,0.1)',border:'1px solid rgba(139,92,246,0.3)',color:'#a78bfa',padding:'4px 16px',borderRadius:100,fontSize:12,fontWeight:600,textTransform:'uppercase',letterSpacing:1,marginBottom:16}}>Features</div>div>
                                        <h2 style={{fontSize:'clamp(32px,4vw,48px)',fontWeight:800,letterSpacing:'-1px',margin:'0 0 12px'}}>필요한 모든 기능이 <span style={{background:'linear-gradient(135deg,#60a5fa,#a78bfa)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>한 곳에</span>span></h2>h2>
                                        <p style={{color:'#64748b',fontSize:18,margin:0}}>복잡한 설정 없이 바로 시작하세요</p>p>
                            </div>div>
                            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:20}}>
                              {[
            {icon:'🔐',bg:'rgba(59,130,246,0.15)',title:'Google 로그인',desc:'별도 회원가입 없이 Google 계정으로 즉시 시작. Supabase 기반의 안전한 인증.'},
            {icon:'✨',bg:'rgba(139,92,246,0.15)',title:'Gemini AI 채팅',desc:'Google Gemini 1.5 Flash 모델로 빠르고 정확한 AI 대화. 실시간 스트리밍 응답.'},
            {icon:'💬',bg:'rgba(34,197,94,0.15)',title:'대화 기록 저장',desc:'모든 대화가 자동으로 저장됩니다. 언제든지 이전 대화를 이어서 계속하세요.'},
            {icon:'💳',bg:'rgba(245,158,11,0.15)',title:'유연한 구독',desc:'무료부터 무제한까지. Polar.sh 기반의 안전하고 편리한 결제 시스템.'},
            {icon:'🔒',bg:'rgba(239,68,68,0.15)',title:'데이터 암호화',desc:'모든 대화 내용은 AES-256으로 암호화 저장. 개인정보는 안전합니다.'},
            {icon:'⚡',bg:'rgba(14,165,233,0.15)',title:'Vercel 배포',desc:'전 세계 엣지 네트워크에 배포. 어디서든 빠른 응답 속도를 경험하세요.'},
                      ].map((f,i) => (
                                    <div key={i} style={{background:'#0f172a',border:'1px solid rgba(255,255,255,0.07)',borderRadius:20,padding:28}}>
                                                    <div style={{width:48,height:48,borderRadius:14,background:f.bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,marginBottom:16}}>{f.icon}</div>div>
                                                    <h3 style={{fontSize:18,fontWeight:700,margin:'0 0 8px'}}>{f.title}</h3>h3>
                                                    <p style={{color:'#64748b',fontSize:15,lineHeight:1.65,margin:0}}>{f.desc}</p>p>
                                    </div>div>
                                  ))}
                            </div>div>
                  </section>section>

                  <section id="pricing" style={{padding:'80px 20px',maxWidth:1100,margin:'0 auto'}}>
                            <div style={{textAlign:'center',marginBottom:48}}>
                                        <div style={{display:'inline-block',background:'rgba(59,130,246,0.1)',border:'1px solid rgba(59,130,246,0.3)',color:'#60a5fa',padding:'4px 16px',borderRadius:100,fontSize:12,fontWeight:600,textTransform:'uppercase',letterSpacing:1,marginBottom:16}}>Pricing</div>div>
                                        <h2 style={{fontSize:'clamp(32px,4vw,48px)',fontWeight:800,letterSpacing:'-1px',margin:'0 0 12px'}}>합리적인 <span style={{background:'linear-gradient(135deg,#60a5fa,#a78bfa)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>요금제</span>span></h2>h2>
                                        <p style={{color:'#64748b',fontSize:18,margin:0}}>필요에 맞는 플랜을 선택하세요</p>p>
                            </div>div>
                            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20}}>
                              {[
            {name:'Free',price:'₩0',period:'/월',desc:'시작하기에 완벽해요',features:['월 10회 AI 채팅','Google 로그인','대화 기록 저장','기본 Gemini 모델'],popular:false},
            {name:'Pro',price:'₩9,900',period:'/월',desc:'개인 사용자에게 최적',features:['월 100회 AI 채팅','모든 Free 기능','고급 Gemini 모델','우선 응답 처리'],popular:true},
            {name:'Unlimited',price:'₩29,900',period:'/월',desc:'무제한으로 마음껏',features:['무제한 AI 채팅','모든 Pro 기능','데이터 암호화','우선 고객 지원'],popular:false},
                      ].map((p,i) => (
                                    <div key={i} style={{background:p.popular?'linear-gradient(135deg,rgba(59,130,246,0.08),rgba(139,92,246,0.08))':'#0f172a',border:p.popular?'1px solid #3b82f6':'1px solid rgba(255,255,255,0.07)',borderRadius:24,padding:32,position:'relative'}}>
                                      {p.popular && <div style={{position:'absolute',top:-12,left:'50%',transform:'translateX(-50%)',background:'linear-gradient(135deg,#3b82f6,#8b5cf6)',color:'#fff',padding:'4px 18px',borderRadius:100,fontSize:12,fontWeight:700,whiteSpace:'nowrap'}}>✨ 가장 인기</div>div>}
                                                    <div style={{fontSize:16,fontWeight:700,color:'#94a3b8',marginBottom:8}}>{p.name}</div>div>
                                                    <div style={{fontSize:48,fontWeight:800,letterSpacing:'-2px',marginBottom:4}}>{p.price}<span style={{fontSize:18,fontWeight:500,color:'#64748b'}}>{p.period}</span>span></div>div>
                                                    <div style={{color:'#64748b',fontSize:14,marginBottom:24}}>{p.desc}</div>div>
                                                    <ul style={{listStyle:'none',padding:0,margin:'0 0 28px',display:'flex',flexDirection:'column',gap:10}}>
                                                      {p.features.map((f,j) => <li key={j} style={{display:'flex',alignItems:'center',gap:10,fontSize:15,color:'#cbd5e1'}}><span style={{color:'#22c55e'}}>✓</span>span>{f}</li>li>)}
                                                    </ul>ul>
                                                    <a href="/login" style={{display:'block',width:'100%',padding:14,borderRadius:14,fontSize:15,fontWeight:600,textAlign:'center',textDecoration:'none',boxSizing:'border-box',background:p.popular?'linear-gradient(135deg,#3b82f6,#8b5cf6)':'transparent',border:p.popular?'none':'1px solid rgba(255,255,255,0.12)',color:p.popular?'#fff':'#94a3b8'}}>
                                                      {p.name==='Free'?'무료로 시작':'시작하기'}
                                                    </a>a>
                                    </div>div>
                                  ))}
                            </div>div>
                  </section>section>

                  <footer style={{borderTop:'1px solid rgba(255,255,255,0.06)',padding:'40px 20px',textAlign:'center',color:'#475569',fontSize:14}}>
                            <div style={{fontSize:18,fontWeight:700,background:'linear-gradient(135deg,#60a5fa,#a78bfa)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',marginBottom:12}}>✨ Gemini Wrapper</div>div>
                            <p style={{margin:0}}>© 2026 Gemini Wrapper. Google Gemini AI 기반 SaaS 서비스.</p>p>
                  </footer>footer>
          </main>main>
        )
}
