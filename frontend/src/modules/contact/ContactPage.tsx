import { useState } from 'react';

export function ContactPage(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify({ name, email, message }) });
      if(res.ok){ setStatus('Message sent. Thank you!'); setName(''); setEmail(''); setMessage(''); }
      else {
        const data = await res.json().catch(()=>({ error:'Failed' }));
        setStatus(data.error || 'Failed to send. Try again later.');
      }
    } catch {
      setStatus('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid" style={{ gap: 16 }}>
      <section className="card">
        <h1 style={{ marginTop: 0 }}>Contact</h1>
        <p style={{ color:'var(--muted)' }}>You can reach me via this form or directly at <a href="mailto:taiwosamuel504@gmail.com">taiwosamuel504@gmail.com</a>.</p>
        <form onSubmit={submit} className="grid" style={{ gap: 12, maxWidth: 520 }}>
          <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required style={{ background:'var(--card)', color:'var(--text)', border:'1px solid rgba(255,255,255,.12)', padding:'10px 12px', borderRadius:10 }} />
          <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required type="email" style={{ background:'var(--card)', color:'var(--text)', border:'1px solid rgba(255,255,255,.12)', padding:'10px 12px', borderRadius:10 }} />
          <textarea placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} required rows={6} style={{ background:'var(--card)', color:'var(--text)', border:'1px solid rgba(255,255,255,.12)', padding:'10px 12px', borderRadius:10 }} />
          <button className="btn primary" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
          {status && <span style={{ color: status.includes('sent') ? 'var(--text)' : 'var(--muted)' }}>{status}</span>}
        </form>
      </section>
    </div>
  );
}


