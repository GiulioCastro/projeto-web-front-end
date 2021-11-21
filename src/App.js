import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";

// providers
import { useGlobalState } from "providers/global";

// layouts
import { MainLayout } from "containers";

// pages
import {
	Home,
} from "pages";

function PrivateRoutes() {
  const { isAuthenticated } = useGlobalState();
	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function PublicRoutes() {
  const { isAuthenticated } = useGlobalState();
	return isAuthenticated ? <Navigate to="/home" /> : <Outlet />;
}

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/">
					<Route element={<PrivateRoutes />}>					
						<Route element={<MainLayout />}>
							<Route path="/home" element={<Home />} />	
						</Route>		
						<Route path="*" element={<Navigate to="/home" />} />	
					</Route>	
					<Route element={<PublicRoutes />}>
						<Route path="/login" element={() => {}} />	
						<Route path="*" element={<Navigate to="/login" />} />	
					</Route>
				</Route>
			</Routes>
		</Router>
	);
};