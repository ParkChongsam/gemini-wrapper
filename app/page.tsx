'use client'
      export default function Home() {
      return (
              <div style={{minHeight:'100vh',background:'#020817',color:'#fff',fontFamily:'sans-serif'}}>
                        <nav style={{position:'fixed',top:0,width:'100%',zIndex:100,background:'rgba(2,8,23,0.9)',borderBottom:'1px solid rgba(255,255,255,0.07)',padding:'0 48px',height:64,display:'flex',alignItems:'center',justifyContent:'space-between',boxSizing:'border-box'}}>
                                    <div style={{fontSize:20,fontWeight:700,background:'linear-gradient(135deg,#60a5fa,#a78bfa)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
                                                  Gemini Wrapper
                                    </div>div>
                                    <div style={{display:'flex',gap:8,alignItems:'center'}}>
                                                  <a href="#features" style={{color:'#94a3b8',textDecoration:'none',padding:'8px 16px',fontSize:14}}>기능</a>a>
                                                  <a href="#pricing" style={{color:'#94a3b8',textDecoration:'none',padding:'8px 16px',fontSize:14}}>요금제</a>a>
                                                  <a href="/login" style={{background:'linear-gradient(135deg,#3b82f6,#8b5cf6)',color:'#fff',textDecoration:'none',padding:'10px 22px',borderRadius:10,fontSize:14,fontWeight:600}}>무료로 시작하기</a>a>
                                    </div>div>
                        </nav>nav>
                        <section style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'120px 20px 60px'}}>
                                    <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(59,130,246,0.1)',border:'1px solid rgba(59,130,246,0.3)',color:'#60a5fa',padding:'6px 18px',borderRadius:100,fontSize:13,fontWeight:600,marginBottom:24}}>
                                                  Google Gemini 1.5 Flash
                                    </div>div>
                                    <h1 style={{fontSize:'clamp(48px,8vw,96px)',fontWeight:800,lineHeight:1.05,letterSpacing:'-3px',marginBottom:24,margin:'0 0 24px'}}>
                                                  AI 채팅을<br/>
                                                  <span style={{background:'linear-gradient(135deg,#60a5fa,#a78bfa,#f472b6)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>더 스마트하게</span>span>
                                    </h1>h1>
                                    <p style={{fontSize:20,color:'#64748b',maxWidth:560,margin:'0 auto 40px',lineHeight:1.7}}>
                                                  Google Gemini의 강력한 AI를 손쉽게 활용하세요
                                    </p>p>
                                    <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
                                                  <a href="/login" style={{background:'linear-gradient(135deg,#3b82f6,#8b5cf6)',color:'#fff',padding:'16px 36px',borderRadius:14,fontSize:17,fontWeight:600,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:8}}>무료로 시작하기</a>a>
                                                  <a href="#pricing" style={{border:'1px solid rgba(255,255,255,0.12)',color:'#94a3b8',padding:'16px 36px',borderRadius:14,fontSize:17,fontWeight:500,textDecoration:'none'}}>요금제 보기</a>a>
                                    </div>div>
                        </section>section>
                        <section id="features" style={{padding:'0 20px 80px',maxWidth:1100,margin:'0 auto'}}>
                                    <div style={{textAlign:'center',marginBottom:48}}>
                                                  <h2 style={{fontSize:'clamp(32px,4vw,48px)',fontWeight:800,letterSpacing:'-1px',margin:'0 0 12px'}}>강력한 기능</h2>h2>
                                                  <p style={{color:'#64748b',fontSize:18,margin:0}}>필요한 모든 것을 갖춘 AI 플랫폼</p>p>
                                    </div>div>
                                    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:20}}>
                                        {[
                  {icon:'🔑',title:'Google 로그인',desc:'별도 회원가입 없이 Google 계정으로 즉시 시작'},
                  {icon:'✨',title:'Gemini AI 채팅',desc:'Google Gemini 1.5 Flash 모델로 빠르고 정확한 AI 대화'},
                  {icon:'💬',title:'대화 기록 저장',desc:'모든 대화가 자동으로 저장됩니다'},
                  {icon:'💳',title:'유연한 구독',desc:'무료부터 무제한까지, Polar.sh 기반의 안전한 결제'},
                  {icon:'🔒',title:'데이터 암호화',desc:'모든 대화 내용은 AES-256으로 암호화'},
                  {icon:'⚡',title:'Vercel 배포',desc:'전 세계 엣지 네트워크에 배포'},
                            ].map((f,i) => (
                                            <div key={i} style={{background:'#0f172a',border:'1px solid rgba(255,255,255,0.07)',borderRadius:20,padding:28}}>
                                                              <div style={{width:48,height:48,borderRadius:14,background:i%2===0?'rgba(59,130,246,0.15)':'rgba(139,92,246,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,marginBottom:16}}>{f.icon}</div>div>
                                                              <h3 style={{fontSize:18,fontWeight:700,margin:'0 0 8px'}}>{f.title}</h3>h3>
                                                              <p style={{color:'#64748b',fontSize:15,lineHeight:1.65,margin:0}}>{f.desc}</p>p>
                                            </div>div>
                                          ))}
                                    </div>div>
                        </section>section>
                        <section id="pricing" style={{padding:'80px 20px',maxWidth:1100,margin:'0 auto'}}>
                                    <div style={{textAlign:'center',marginBottom:48}}>
                                                  <h2 style={{fontSize:'clamp(32px,4vw,48px)',fontWeight:800,letterSpacing:'-1px',margin:'0 0 12px'}}>요금제</h2>h2>
                                                  <p style={{color:'#64748b',fontSize:18,margin:0}}>필요에 맞는 플랜을 선택하세요</p>p>
                                    </div>div>
                                    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20}}>
                                        {[
                  {name:'Free',price:'₩0',period:'/월',desc:'시작하기에 완벽',features:['월 10회 AI 채팅','Google 로그인','기본 Gemini 모델'],popular:false},
                  {name:'Pro',price:'₩9,900',period:'/월',desc:'개인 사용자에게 최적',features:['월 100회 AI 채팅','모든 Free 기능','고급 Gemini 모델'],popular:true},
                  {name:'Unlimited',price:'₩29,900',period:'/월',desc:'무제한으로 마음껏',features:['무제한 AI 채팅','모든 Pro 기능','우선 고객 지원'],popular:false},
                            ].map((plan,i) => (
                                            <div key={i} style={{background:plan.popular?'linear-gradient(135deg,rgba(59,130,246,0.1),rgba(139,92,246,0.1))':'#0f172a',border:plan.popular?'1px solid rgba(59,130,246,0.4)':'1px solid rgba(255,255,255,0.07)',borderRadius:24,padding:32,position:'relative'}}>
                                                {plan.popular && <div style={{position:'absolute',top:-12,left:'50%',transform:'translateX(-50%)',background:'linear-gradient(135deg,#3b82f6,#8b5cf6)',color:'#fff',padding:'4px 16px',borderRadius:100,fontSize:12,fontWeight:700,whiteSpace:'nowrap'}}>가장 인기</div>div>}
                                                              <h3 style={{fontSize:22,fontWeight:700,margin:'0 0 8px'}}>{plan.name}</h3>h3>
                                                              <div style={{marginBottom:16}}>
                                                                                  <span style={{fontSize:36,fontWeight:800}}>{plan.price}</span>span>
                                                                                  <span style={{color:'#64748b',fontSize:14}}>{plan.period}</span>span>
                                                              </div>div>
                                                              <p style={{color:'#64748b',fontSize:14,margin:'0 0 24px'}}>{plan.desc}</p>p>
                                                              <ul style={{listStyle:'none',padding:0,margin:'0 0 28px',display:'flex',flexDirection:'column',gap:10}}>
                                                                  {plan.features.map((f,j) => (
                                                                  <li key={j} style={{display:'flex',alignItems:'center',gap:8,fontSize:14,color:'#e2e8f0'}}>
                                                                                          <span style={{color:'#22c55e'}}>✓</span>span> {f}
                                                                  </li>li>
                                                                ))}
                                                              </ul>ul>
                                                              <a href="/login" style={{display:'block',textAlign:'center',padding:'12px 24px',background:plan.popular?'linear-gradient(135deg,#3b82f6,#8b5cf6)':'rgba(255,255,255,0.06)',color:'#fff',textDecoration:'none',borderRadius:12,fontSize:15,fontWeight:600,border:plan.popular?'none':'1px solid rgba(255,255,255,0.1)'}}>시작하기</a>a>
                                            </div>div>
                                          ))}
                                    </div>div>
                        </section>section>
                        <footer style={{borderTop:'1px solid rgba(255,255,255,0.07)',padding:'32px 48px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16}}>
                                    <div style={{fontWeight:700,fontSize:18,background:'linear-gradient(135deg,#60a5fa,#a78bfa)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Gemini Wrapper</div>div>
                                    <div style={{color:'#475569',fontSize:14}}>2024 Gemini Wrapper. All rights reserved.</div>div>
                        </footer>footer>
              </div>div>
            )
}
