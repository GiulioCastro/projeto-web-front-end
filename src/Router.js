import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

// layouts
import { MainLayout } from "containers";

// pages
import {
	Home,
} from "pages";

function PrivateRoutes() {
	const isAuthenticated = true;
	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function PublicRoutes() {
	const isAuthenticated = false;
	return isAuthenticated ? <Navigate to="/home" /> : <Outlet />;
}

function Router() {
	return (
		<BrowserRouter>
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
		</BrowserRouter>
	);
};

export default Router;