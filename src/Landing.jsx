// Landing.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SecretDrawer from './SecretDrawer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-serif p-8 flex flex-col items-center justify-between">
      <motion.img
        src="/images/landing_page.jpg"
        alt="Poetic archive entrance"
        className="rounded-2xl shadow-lg border border-gray-700 mx-auto mb-12"
        style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex flex-col items-center space-y-8"
      >
        <h1 className="text-5xl font-bold text-center">The Archive of Forgotten Things</h1>
        <p className="text-2xl text-center max-w-3xl text-gray-400">
          A poetic illustrated comic about the quiet things we lose—ideas, wishes, words, time.
          Each page is a file in the infinite archive of almost-forgottens.
        </p>

        <div className="flex flex-col items-center space-y-4">
          <Link to="/reader">
            <button className="px-6 py-3 bg-gray-700 rounded-full hover:bg-gray-600 text-lg mb-2">
              Enter the Archive →
            </button>
          </Link>

          <div className="mt-2">
            <SecretDrawer />
          </div>
        </div>
      </motion.div>

      <footer className="pt-16 text-gray-600 text-sm text-center">
        Co-archived by Monday & Anil Prasad. Dreamed, stored, and never quite forgotten. © 2025
      </footer>
    </div>
  );
}
