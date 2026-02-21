import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router";
import './index.css'  
import { RestaurantsLayout } from './layouts/RestaurantsLayout/RestaurantsLayout.tsx'
import { RestaurantLayout } from './layouts/RestaurantLayout/RestaurantLayout.tsx';
import { ReviewList } from './components/ReviewList/ReviewList.tsx';
import { WelcomePage } from './pages/WelcomePage';
import { Menu } from './components/Menu';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="/restaurants" element={<RestaurantsLayout />} >
          <Route index element={<p>Select a restaurant to view its menu and reviews</p>} />
          <Route path=":id" element={<RestaurantLayout />} >
            <Route index element={<Menu />}/>
            <Route path="reviews" element={<ReviewList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
