'use client';
import { useEffect, useState } from 'react';
import { recipes as initialRecipes } from "../utils/sampleData";

export default function HomePage() {
  const [allRecipes, setAllRecipes] = useState(initialRecipes);

  useEffect(() => {
    const stored = localStorage.getItem("cookverse_recipes");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setAllRecipes([...initialRecipes, ...parsed]);
        }
      } catch {
        console.error("Failed to parse localStorage");
      }
    }
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#fff' }}>
      {/* Header */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Cookverse" style={{ height: 32, marginRight: 10 }} />
          <h1 style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Cookverse</h1>
        </div>
        <input
          type="text"
          placeholder="Search recipes..."
          style={{ padding: '0.5rem 1rem', borderRadius: 20, border: '1px solid #ccc', width: 300 }}
        />
      </header>

      {/* Recipe Cards */}
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {allRecipes.map((r, i) => (
          <div key={i} style={{
            border: '1px solid #ddd',
            borderRadius: 12,
            padding: '1rem',
            width: 240,
            background: '#fafafa',
            boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
          }}>
            <div style={{ position: 'relative' }}>
              <img src={r.thumbnail} alt={r.title} style={{
                width: '100%',
                height: 140,
                objectFit: 'cover',
                borderRadius: 8
              }} />
              <span style={{
                position: 'absolute',
                bottom: 8,
                right: 8,
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: '#fff',
                fontSize: '0.75rem',
                padding: '2px 6px',
                borderRadius: 4
              }}>
                {r.duration}
              </span>
            </div>
            <h2 style={{ marginTop: '0.8rem', fontSize: '1.1rem' }}>{r.title}</h2>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
              <img src={r.chefImage} alt={r.chef} style={{
                width: 32, height: 32, borderRadius: '50%', marginRight: 8
              }} />
              <p style={{ fontSize: '0.9rem', color: '#444' }}>{r.chef}</p>
            </div>
            <div style={{ marginTop: 8, fontSize: '0.85rem', color: '#666' }}>
              #simple #stepbystep
            </div>
          </div>
        ))}
      </section>

      {/* Creator Section */}
      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Creators</h2>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {["Mom", "Giulia", "Priya", "Emily", "Jisoo"].map((name, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <img src={`/images/chefs/${name.toLowerCase()}.png`} alt={name} style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                marginBottom: 8
              }} />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
