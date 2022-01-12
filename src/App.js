import { HashRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

// providers
import { useGlobalState } from "providers/global";

// layouts
import { MainLayout, NoLayout, SimpleLayout } from "containers";

// pages
import {
	Home, Account, Search, Read, Write, Login, Register
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
		<HashRouter basename="/">
			<Routes>
				<Route element={<PrivateRoutes />}>					
					<Route element={<MainLayout />}>
						<Route path="/home" element={<Home />} />	
						<Route path="/account" element={<Account />} />	
						<Route path="/search" element={<Search />} />	
					</Route>		
					<Route element={<SimpleLayout />}>
						<Route path="/read" element={<Read />} />			
						<Route path="/write" element={<Write />} />			
					</Route>	
					<Route path="*" element={<Navigate to="/home" />} />	
				</Route>	
				<Route element={<PublicRoutes />}>
					<Route element={<NoLayout />}>
						<Route path="/login" element={<Login />} />		
						<Route path="/register" element={<Register />} />		
					</Route>		
					<Route path="*" element={<Navigate to="/login" />} />	
				</Route>
			</Routes>
		</HashRouter>
	);
};