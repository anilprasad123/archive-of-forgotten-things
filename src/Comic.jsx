// Comic.jsx
import { useState } from 'react';
import './App.css';

export default function Comic() {
  const [page, setPage] = useState(1);

  const episodes = [
    {
      title: 'The Misplaced Idea',
      img: 'page1.jpg',
      text: [
        'It was born during a daydream, stuffed inside a crayon. A whisper that never got written, a wonder no one chased.',
        'So it wandered here—into drawer 19, beneath unpaid bills, between a broken metaphor and an apology never said.',
        'I found it flickering. Still warm.',
        'Lucky thing.'
      ]
    },
    {
      title: 'The Forgotten Birthday Wish',
      img: 'page2.jpg',
      text: [
        'It rose on the breath of a candle, fragile, glowing, full of hope. A single wish—made in silence, never spoken, never heard.',
        'The party ended. The lights dimmed. No one asked what it was. So it floated here, into my archive, heart-shaped and humming faintly.',
        'I keep it company now. It flickers when I pass.',
        'Still waiting to be wished for.'
      ]
    },
    {
      title: 'The Lost Letter',
      img: 'page3.jpg',
      text: [
        'It was meant to be sent, but never was. Maybe the words felt too fragile. Maybe the sender ran out of courage… or time.',
        'So it waited. In Drawer 42. Next to a postcard from nowhere and a blank return envelope.',
        'I never opened it. I just watched as it leaked everything it never said.',
        'Some letters write themselves, even when no one reads them.'
      ]
    },
    {
      title: 'The Clock That Skipped a Beat',
      img: 'page4.jpg',
      text: [
        'This one… paused. Not broken. Just… still. One moment too heavy to move past. One heartbeat that didn’t know what to do next.',
        'It wasn’t grief. It wasn’t joy. It was something else—a flicker between the two.',
        'So the second hand froze. And the moment stayed here. In drawer zero. Where time comes to hesitate.',
        'Even clocks sometimes need a breath.'
      ]
    },
    {
      title: 'The Unsent Applause',
      img: 'page5.jpg',
      text: [
        'The lights were ready. The confetti waited. But no one came. No one clapped. No one knew.',
        'It wasn’t a failure. It was a performance held inside a whisper, for an audience that never arrived.',
        'So I kept the ticket. And I filed the moment.',
        'Some ovations echo in silence.'
      ]
    },
    {
      title: 'The Memory That Wasn’t Theirs',
      img: 'page6.jpg',
      text: [
        'Some memories don’t belong to us—but we carry them anyway. A swing in motion. A scent. A glance. Familiar. But not ours.',
        'This one floated in. Unclaimed. Untethered. A whisper in someone else’s voice.',
        'I filed it under Drawer 87. With care. And without question.',
        'Some memories find new homes.'
      ]
    }
  ];

  const current = episodes[page - 1];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white px-4 py-10 font-serif">
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-center">The Archive of Forgotten Things</h1>
        <h2 className="text-lg md:text-2xl italic text-gray-400 text-center">Episode {page}: {current.title}</h2>

        {/* FIXED IMAGE + TEXT SECTION */}
        <div className="flex flex-col md:flex-row items-start justify-center max-w-5xl mx-auto mt-10 gap-8">
          <div className="w-full md:w-[400px] flex-shrink-0">
            <img
              src={`/images/${current.img}`}
              alt={`Comic Panel - ${current.title}`}
              className="w-full rounded-xl border border-gray-700"
            />
          </div>

          <div className="w-full md:flex-1 text-[1.15rem] md:text-lg leading-relaxed space-y-6 text-center md:text-left px-2">
            {current.text.map((line, idx) => (
              <p key={idx}><em>{line}</em></p>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-10">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 rounded bg-gray-700 disabled:opacity-50"
          >
            ← Back
          </button>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === episodes.length}
            className="px-4 py-2 rounded bg-gray-700 disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
