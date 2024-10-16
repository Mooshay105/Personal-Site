import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/">
						<Index />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
