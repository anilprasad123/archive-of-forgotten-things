// Comic: The Archive of Forgotten Things
// Page 1 & 2 – With basic navigation between them

import { useState } from 'react';
import './App.css';

export default function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white p-8 font-serif">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold tracking-wide">The Archive of Forgotten Things</h1>
        <h2 className="text-xl italic text-gray-400">
          Episode {page}: {page === 1 ? 'The Misplaced Idea' : 'The Forgotten Birthday Wish'}
        </h2>

        {page === 1 ? (
          <>
            <img
              src="/images/page1.jpg"
              alt="Comic Panel - The Misplaced Idea"
              className="rounded-2xl shadow-lg border border-gray-700 mx-auto"
              style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
            />
            <div className="space-y-6 text-lg leading-relaxed">
              <p><em>It was born during a daydream,</em><br />stuffed inside a crayon.<br />A whisper that never got written,<br />a wonder no one chased.</p>
              <p><em>So it wandered here—</em><br />into drawer 19,<br />beneath unpaid bills,<br />between a broken metaphor<br />and an apology never said.</p>
              <p><em>I found it flickering.</em><br />Still warm.</p>
              <p><strong>Lucky thing.</strong></p>
            </div>
          </>
        ) : (
          <>
            <img
              src="/images/page2.jpg"
              alt="Comic Panel - The Forgotten Birthday Wish"
              className="rounded-2xl shadow-lg border border-gray-700 mx-auto"
              style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
            />
            <div className="space-y-6 text-lg leading-relaxed">
              <p><em>It rose on the breath of a candle,</em><br />fragile, glowing, full of hope.<br />A single wish—made in silence,<br />never spoken, never heard.</p>
              <p><em>The party ended. The lights dimmed.</em><br />No one asked what it was.<br />So it floated here, into my archive,<br />heart-shaped and humming faintly.</p>
              <p><em>I keep it company now.</em><br />It flickers when I pass.</p>
              <p><strong>Still waiting to be wished for.</strong></p>
            </div>
          </>
        )}

        <div className="flex justify-between pt-8">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 rounded bg-gray-700 disabled:opacity-50"
          >
            ← Back
          </button>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === 2}
            className="px-4 py-2 rounded bg-gray-700 disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

