import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
      if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const { message, history } = await request.json()
          const apiKey = process.env.GEMINI_API_KEY
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`

              const contents = [
                  ...history.map((msg: { role: string; content: string }) => ({
                        role: msg.role === 'user' ? 'user' : 'model',
                              parts: [{ text: msg.content }],
                                  })),
                                      { role: 'user', parts: [{ text: message }] },
                                        ]

                                          const response = await fetch(url, {
                                              method: 'POST',
                                                  headers: { 'Content-Type': 'application/json' },
                                                      body: JSON.stringify({ contents }),
                                                        })

                                                          const data = await response.json()
                                                            const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '응답을 받지 못했습니다.'
                                                              return NextResponse.json({ response: text })
                                                              }