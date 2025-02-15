import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./assets/main.css";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/">
						<Index />
					</Route>
					<Route exact path="/*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
