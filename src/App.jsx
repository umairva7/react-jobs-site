import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/mainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import JobsPage from "./components/jobsPage.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import JobPage from "./pages/JobPage.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="jobs" element={<JobsPage />} />
      <Route path="jobs/:id" element={<JobPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
