'use client';
import { useParams } from 'next/navigation';
import { recipes } from "../../../utils/sampleData";

export default function RecipeDetailPage() {
  const { id } = useParams();
  const recipe = recipes[parseInt(id)];

  if (!recipe) {
    return <div style={{ padding: '2rem' }}><h1>Recipe not found.</h1></div>;
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#fff' }}>
      <img src={recipe.thumbnail} alt={recipe.title} style={{
        width: '100%', maxHeight: 320, objectFit: 'cover', borderRadius: 12, marginBottom: '1rem'
      }} />

      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{recipe.title}</h1>
      <p style={{ color: '#666', marginBottom: '1rem' }}>🕒 {recipe.duration}</p>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <img src={recipe.chefImage} alt={recipe.chef} style={{
          width: 40, height: 40, borderRadius: '50%', marginRight: 12
        }} />
        <p style={{ fontSize: '1rem' }}>{recipe.chef}</p>
      </div>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>📋 Preparation Steps</h2>
        <ol style={{ paddingLeft: '1.2rem' }}>
          <li>Prepare ingredients and clean the workspace.</li>
          <li>Follow the cooking instructions carefully.</li>
          <li>Plate the dish and serve while hot.</li>
        </ol>
      </section>

      <button style={{
        backgroundColor: '#FF5A28',
        color: 'white',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer'
      }}>
        🖨️ Print Recipe
      </button>
    </main>
  );
}

