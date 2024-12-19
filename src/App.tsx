import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./rootLayout/RootLayout";
import Home from "./pages/home/Home";
import DetailPage from "./pages/detailPage/DetailPage";
import NotFound from "./pages/notFound/notFound";
  
function App() {
  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/car/:carId" element={<DetailPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      )
    );
  
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
  
  export default App;