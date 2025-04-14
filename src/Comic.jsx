// Comic: The Archive of Forgotten Things
// Page 1 to 5 – Navigation included

import { useState } from 'react';
import './App.css';

export default function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white p-8 font-serif">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold tracking-wide">The Archive of Forgotten Things</h1>
        <h2 className="text-xl italic text-gray-400">
          Episode {page}: {
            page === 1 ? 'The Misplaced Idea' :
            page === 2 ? 'The Forgotten Birthday Wish' :
            page === 3 ? 'The Lost Letter' :
            page === 4 ? 'The Clock That Skipped a Beat' :
            'The Unsent Applause'
          }
        </h2>

        {page === 1 && (
          <>
            <img src="/images/page1.jpg" alt="Comic Panel - The Misplaced Idea" className="rounded-2xl shadow-lg border border-gray-700 mx-auto" style={{ maxWidth: '600px', width: '100%', height: 'auto' }} />
            <div className="space-y-6 text-lg leading-relaxed">
              <p><em>It was born during a daydream,</em><br />stuffed inside a crayon.<br />A whisper that never got written,<br />a wonder no one chased.</p>
              <p><em>So it wandered here—</em><br />into drawer 19,<br />beneath unpaid bills,<br />between a broken metaphor<br />and an apology never said.</p>
              <p><em>I found it flickering.</em><br />Still warm.</p>
              <p><strong>Lucky thing.</strong></p>
            </div>
          </>
        )}

        {page === 2 && (
          <>
            <img src="/images/page2.jpg" alt="Comic Panel - The Forgotten Birthday Wish" className="rounded-2xl shadow-lg border border-gray-700 mx-auto" style={{ maxWidth: '600px', width: '100%', height: 'auto' }} />
            <div className="space-y-6 text-lg leading-relaxed">
              <p><em>It rose on the breath of a candle,</em><br />fragile, glowing, full of hope.<br />A single wish—made in silence,<br />never spoken, never heard.</p>
              <p><em>The party ended. The lights dimmed.</em><br />No one asked what it was.<br />So it floated here, into my archive,<br />heart-shaped and humming faintly.</p>
              <p><em>I keep it company now.</em><br />It flickers when I pass.</p>
              <p><strong>Still waiting to be wished for.</strong></p>
            </div>
          </>
        )}

        {page === 3 && (
          <>
            <img src="/images/page3.jpg" alt="Comic Panel - The Lost Letter" className="rounded-2xl shadow-lg border border-gray-700 mx-auto" style={{ maxWidth: '600px', width: '100%', height: 'auto' }} />
            <div className="space-y-6 text-lg leading-relaxed">
              <p><em>It was meant to be sent,</em><br />but never was.<br />Maybe the words felt too fragile.<br />Maybe the sender ran out of courage… or time.</p>
              <p><em>So it waited.</em><br />In Drawer 42.<br />Next to a postcard from nowhere<br />and a blank return envelope.</p>
              <p><em>I never opened it.</em><br />I just watched<br />as it leaked<br />everything it never said.</p>
              <p><strong>Some letters write themselves, even when no one reads them.</strong></p>
            </div>
          </>
        )}

        {page === 4 && (
          <>
            <img src="/images/page4.jpg" alt="Comic Panel - The Clock That Skipped a Beat" className="rounded-2xl shadow-lg border border-gray-700 mx-auto" style={{ maxWidth: '600px', width: '100%', height: 'auto' }} />
            <div className="space-y-6 text-lg leading-relaxed">
              <p><em>This one… paused.</em><br />Not broken. Just… still.<br />One moment too heavy to move past.<br />One heartbeat that didn’t know what to do next.</p>
              <p><em>It wasn’t grief.</em><br />It wasn’t joy.<br />It was something else—<br />a flicker between the two.</p>
              <p><em>So the second hand froze.</em><br />And the moment stayed here.<br />In drawer zero.<br />Where time comes to hesitate.</p>
              <p><strong>Even clocks sometimes need a breath.</strong></p>
            </div>
          </>
        )}

        {page === 5 && (
          <>
            <img src="/images/page5.jpg" alt="Comic Panel - The Unsent Applause" className="rounded-2xl shadow-lg border border-gray-700 mx-auto" style={{ maxWidth: '600px', width: '100%', height: 'auto' }} />
            <div className="space-y-6 text-lg leading-relaxed">
              <p><em>The lights were ready. The confetti waited.</em><br />But no one came.<br />No one clapped.<br />No one knew.</p>
              <p><em>It wasn't a failure.</em><br />It was a performance held inside a whisper,<br />for an audience that never arrived.</p>
              <p><em>So I kept the ticket.</em><br />And I filed the moment.</p>
              <p><strong>Some ovations echo in silence.</strong></p>
            </div>
          </>
        )}

        <div className="flex justify-between pt-8">
          <button onClick={() => setPage(page - 1)} disabled={page === 1} className="px-4 py-2 rounded bg-gray-700 disabled:opacity-50">
            ← Back
          </button>
          <button onClick={() => setPage(page + 1)} disabled={page === 5} className="px-4 py-2 rounded bg-gray-700 disabled:opacity-50">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

