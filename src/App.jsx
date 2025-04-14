// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Comic from './Comic';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/reader" element={<Comic />} />
      </Routes>
    </Router>
  );
}
