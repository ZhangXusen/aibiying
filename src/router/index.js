import React from "react";
import { Navigate } from "react-router-dom";

const Home = React.lazy(() => import("@/views/Home"));
const NotFound = React.lazy(() => import("@/views/404"));
const Entire = React.lazy(() => import("@/views/Entire"));
const Detail = React.lazy(() => import("@/views/Detail"));

const routes = [
	{
		path: "/",
		element: <Navigate to="/home" />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/entire",
		element: <Entire />,
	},
	{
		path: "/detail",
		element: <Detail />,
	},
];

export default routes;
