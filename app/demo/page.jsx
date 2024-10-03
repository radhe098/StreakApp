"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [Input, setInput] = useState('');
  const [Output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

    const revealUrl = async () => {
      if (!Input) return;  
      setLoading(true); 
      setOutput(null);

        const res = await fetch('/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ Input }),  
        });

        const data = await res.json();
        // if (data.Output) {
          setOutput(data.Output);  
      //   } else {
      // }
    };


    useEffect(() => {
      revealUrl();
    },[])

  return (
    <div>
      <h1>Reveal Shortened URL</h1>
      <input
        type="text"
        value={Input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter shortened URL"
      />
      <button onClick={revealUrl} disabled={loading || !Input}>
        {loading ? 'Revealing...' : 'Reveal URL'}
      </button>

      {Output && <p>Original URL: {Output}</p>}
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
    </div>
  );
}