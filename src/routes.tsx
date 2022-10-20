
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { CountryDetails } from "./pages/country-details";
import HomeCountries from "./pages/home-countries";



export function AppRoutes() {
    return (     
        <Router>
            <Routes >                    
                <Route path="/home" element={<HomeCountries />}/>                
                <Route path="/country-details" element={<CountryDetails />}/>                
                <Route path="*" element={<h1 className="h1">NOT FOUND PAGE</h1>}/>                 
            </Routes>
        </Router>        
    )
}