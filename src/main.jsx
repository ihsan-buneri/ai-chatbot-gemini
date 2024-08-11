import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import DashboardPage from "./pages/dashboard/DashboardPage.jsx";
import ChatPage from "./pages/chat/ChatPage.jsx";
import RootLayout from "./layouts/rootLayout/RootLayout.jsx";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout.jsx";
import SignInPage from "./pages/signIn/SignInPage.jsx";
import SignUpPage from "./pages/signUp/SignUpPage.jsx";
const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/sign-in/*",
				element: <SignInPage />,
			},
			{
				path: "/sign-up/*",
				element: <SignUpPage />,
			},
			{
				element: <DashboardLayout />,
				children: [
					{
						path: "/dashboard",
						element: <DashboardPage />,
					},
					{
						path: "/dashboard/chats/:id",
						element: <DashboardPage />,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
