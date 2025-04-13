'use client';
import { recipes } from "../utils/sampleData";

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>🍳 Welcome to Cookverse</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {recipes.map((r, i) => (
          <div key={i} style={{
            border: '1px solid #ccc',
            borderRadius: 10,
            padding: '1rem',
            width: 240,
            background: '#fff'
          }}>
            <img src={r.thumbnail} alt={r.title} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 6 }} />
            <h2 style={{ marginTop: '1rem' }}>{r.title}</h2>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 6 }}>
              <img src={r.chefImage} alt={r.chef} style={{ width: 32, height: 32, borderRadius: '50%', marginRight: 8 }} />
              <p>{r.chef} • {r.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
