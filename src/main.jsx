import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  // BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Form from './components/Form.jsx';
import Table from './components/TableComponent.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "tableCompo",
    element: <Table />,
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>)
