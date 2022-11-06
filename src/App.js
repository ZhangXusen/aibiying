import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import Footer from "./components/app-footer";
import routes from "./router";
const App = memo(() => {
	return (
		<div className="app">
			<div className="page">{useRoutes(routes)}</div>
			<Footer />
		</div>
	);
});

export default App;
