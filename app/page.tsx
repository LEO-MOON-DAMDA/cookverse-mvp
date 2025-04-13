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
    <main style={{ padding: '2rem', backgroundColor: '#fff' }}>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        🍳 Explore Recipes on Cookverse
      </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {allRecipes.map((r, i) => (
          <div key={i} style={{
            border: '1px solid #ddd',
            borderRadius: 12,
            padding: '1rem',
            width: 240,
            background: '#fafafa',
            boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
          }}>
            <img src={r.thumbnail} alt={r.title} style={{
              width: '100%',
              height: 140,
              objectFit: 'cover',
              borderRadius: 8
            }} />
            <h2 style={{ marginTop: '0.8rem', fontSize: '1.1rem' }}>{r.title}</h2>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
              <img src={r.chefImage} alt={r.chef} style={{
                width: 32, height: 32, borderRadius: '50%', marginRight: 8
              }} />
              <p style={{ fontSize: '0.9rem', color: '#444' }}>{r.chef} • {r.duration}</p>
            </div>
            <div style={{ marginTop: 8, fontSize: '0.85rem', color: '#666' }}>
              #simple #stepbystep
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
