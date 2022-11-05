import '../styles/styles.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home';

function App() {
  return (
    <BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='*' element={<p>Not found</p>} />
					</Routes>
				</BrowserRouter>
  );
}

export default App;
