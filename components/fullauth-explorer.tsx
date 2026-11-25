'use client';

import { useState } from 'react';

const nodes = [
  { id: 'web', title: 'Web client', sub: 'Next.js / React', detail: 'The web integration exposes shared authentication behavior to a Next.js and React application.' },
  { id: 'native', title: 'Native client', sub: 'React Native', detail: 'A React Native integration gives mobile clients an entry point to the shared library.' },
  { id: 'core', title: 'FullAuth core', sub: 'TypeScript modules', detail: 'The core contains credential and Google provider modules alongside reusable auth utilities.' },
  { id: 'session', title: 'JWT + session', sub: 'Token utilities', detail: 'Shared utilities manage tokens and sessions across integrations.' },
];

export function FullAuthExplorer() {
  const [active, setActive] = useState('core');
  const selected = nodes.find(n => n.id === active) ?? nodes[2];
  return <div className="auth-explorer" aria-label="Interactive FullAuth architecture explorer">
    <div className="auth-toolbar"><span>FullAuth architecture</span><span>Choose a part to explore</span></div>
    <div className="auth-map">
      <div className="auth-clients"><span className="map-label">CLIENTS</span>{nodes.slice(0,2).map(n=><button key={n.id} onClick={()=>setActive(n.id)} aria-pressed={active===n.id} className={`auth-node ${active===n.id?'is-active':''}`}><strong>{n.title}</strong><small>{n.sub}</small></button>)}</div>
      <div className="auth-connectors" aria-hidden="true"><span/><span/></div>
      <div className="auth-services"><span className="map-label">SHARED LIBRARY</span>{nodes.slice(2).map(n=><button key={n.id} onClick={()=>setActive(n.id)} aria-pressed={active===n.id} className={`auth-node ${active===n.id?'is-active':''}`}><strong>{n.title}</strong><small>{n.sub}</small></button>)}</div>
    </div>
    <div className="auth-detail" aria-live="polite"><span className="detail-marker">↳</span><div><strong>{selected.title}</strong><p>{selected.detail}</p></div></div>
    <p className="auth-caveat">See Scope and limitations for the library’s current production-readiness caveats.</p>
  </div>;
}
