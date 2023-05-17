import { useEffect, useState } from 'react';
import Home from './component/home';
import ClickedCard from './component/clicked_user';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom'
const App = () => {
  return (
    <div>
       <Router>
        <Routes>
         <Route path="/" exact element={<Home />} />
         <Route path="/profile/:id" exact element={<ClickedCard />} />
       </Routes>
      </Router>
    </div>
  );
};

export default App