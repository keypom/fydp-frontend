import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Homepage from "./pages/Homepage";
import Checkout from "./pages/Checkout";
import Verification from "./pages/Verification";
import AboutUs from "./pages/AboutUs";
import Gallery, { eventsLoader } from "./pages/Gallery";
import Create, { createAction } from "./pages/Create";
import Test from "./pages/Test";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="checkout" element={<Checkout />} loader={eventsLoader} />
      <Route path="verification" element={<Verification />} />
      <Route path="test" element={<Test />} action={createAction} />
      <Route path="create" element={<Create />} action={createAction} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="gallery" element={<Gallery />} loader={eventsLoader} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
