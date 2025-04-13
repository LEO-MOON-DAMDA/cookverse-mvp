'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function UploadPage() {
  const [form, setForm] = useState({
    title: '',
    thumbnail: '',
    chef: '',
    chef_image: '',
    duration: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Uploading...');

    const { data, error } = await supabase.from('recipes').insert([form]);
    if (error) {
      console.error(error);
      setStatus('❌ Upload failed');
    } else {
      setStatus('✅ Recipe uploaded!');
      setForm({ title: '', thumbnail: '', chef: '', chef_image: '', duration: '' });
    }
  };

  return (
    <main style={{ maxWidth: 800, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Upload Recipe to Supabase</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {[
          ['Recipe Title', 'title'],
          ['Thumbnail Image URL', 'thumbnail'],
          ['Chef Name', 'chef'],
          ['Chef Image URL', 'chef_image'],
          ['Duration (e.g. 6:45)', 'duration']
        ].map(([label, name]) => (
          <label key={name}>
            {label}
            <input name={name} value={form[name]} onChange={handleChange} style={{ width: '100%' }} />
          </label>
        ))}
        <button type="submit" style={{
          backgroundColor: '#FF5A28',
          color: 'white',
          padding: 10,
          border: 'none',
          borderRadius: 6
        }}>
          Upload to Supabase
        </button>
        <p>{status}</p>
      </form>
    </main>
  );
}
