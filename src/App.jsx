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
import { Box } from "@chakra-ui/react";
import Profile from "./pages/Profile";
import Event from "./pages/Event";

const root = "fydp-frontend";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={root} element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="checkout" element={<Checkout />} loader={eventsLoader} />
      <Route path="verification" element={<Verification />} />
      <Route path="test" element={<Test />} action={createAction} />
      <Route path="create" element={<Create />} action={createAction} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="profile" element={<Profile />} />
      <Route path="gallery" element={<Gallery />} loader={eventsLoader} />
      <Route
        path="gallery/:eventID"
        element={<Event />}
        loader={eventsLoader}
      />
      <Route
        path="secondary-market"
        element={<Gallery isSecondary={true} />}
        loader={eventsLoader}
      />
      <Route
        path="secondary-market/:eventID"
        element={<Event isSecondary={true} />}
        loader={eventsLoader}
      />
    </Route>
  )
);

function App() {
  return (
    <Box minHeight="100vh" sx={{ "background-color": "#E5E5E5" }}>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
