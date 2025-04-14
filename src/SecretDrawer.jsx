// SecretDrawer.jsx
import { useState } from 'react';

export default function SecretDrawer() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="mt-8 text-center">
      <button
        onClick={() => setOpened(!opened)}
        className="text-xs text-gray-500 hover:text-white transition-all"
      >
        {opened ? 'Close Drawer ❌' : 'Open Drawer 42 🔒'}
      </button>

      {opened && (
        <div className="mt-4 text-gray-400 text-sm max-w-md mx-auto border-t pt-4 border-gray-600">
          <p><em>Drawer 42</em> contained:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-left text-gray-500">
            <li>One apology never spoken aloud</li>
            <li>A photograph missing its subject</li>
            <li>The exact moment someone changed their mind</li>
            <li>Three untitled poems (still glowing faintly)</li>
          </ul>
        </div>
      )}
    </div>
  );
}
