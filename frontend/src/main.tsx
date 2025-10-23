import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css';
import { AppLayout } from './modules/layout/AppLayout';
import { HomePage } from './modules/home/HomePage';
import { AboutPage } from './modules/about/AboutPage';
import { ProjectsPage } from './modules/projects/ProjectsPage';
import { ResumePage } from './modules/resume/ResumePage';
import { ContactPage } from './modules/contact/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'resume', element: <ResumePage /> },
      { path: 'contact', element: <ContactPage /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


