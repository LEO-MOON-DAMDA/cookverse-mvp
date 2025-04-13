'use client';
import { useState } from 'react';

export default function UploadPage() {
  const [form, setForm] = useState({
    title: '',
    videoUrl: '',
    thumbnail: '',
    chef: '',
    chefImage: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("cookverse_recipes") || "[]");
    const updated = [...saved, form];
    localStorage.setItem("cookverse_recipes", JSON.stringify(updated));
    alert("✅ Recipe uploaded! Now go back to homepage to see it.");
    setForm({
      title: '',
      videoUrl: '',
      thumbnail: '',
      chef: '',
      chefImage: '',
      duration: '',
    });
  };

  return (
    <main style={{ maxWidth: 800, margin: '2rem auto' }}>
      <h1>Upload Recipe</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {[
          ['Recipe Title', 'title'],
          ['Video URL', 'videoUrl'],
          ['Thumbnail Image URL', 'thumbnail'],
          ['Chef Name', 'chef'],
          ['Chef Image URL', 'chefImage'],
          ['Cooking Duration (e.g., 10:30)', 'duration'],
        ].map(([label, name]) => (
          <label key={name}>
            {label}
            <input name={name} value={form[name]} onChange={handleChange} style={{ width: '100%' }} />
          </label>
        ))}
        <button type="submit" style={{ backgroundColor: '#FF5A28', color: 'white', padding: 10, border: 'none' }}>
          Upload Recipe
        </button>
      </form>
    </main>
  );
}

