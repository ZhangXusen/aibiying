import { React, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "@/App";
import "normalize.css";
import "antd/dist/antd.css";
import "./assets/style/index.less";
import store from "@/store";
//路径起别名 @/:npm i @craco/craco@alpha =>craco.config.js

import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Suspense fallback="loading">
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<HashRouter>
					<App />
				</HashRouter>
			</ThemeProvider>
		</Provider>
	</Suspense>
);
