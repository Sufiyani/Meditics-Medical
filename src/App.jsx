import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pages from "./pages/Pages";
import PagesTeamDetails from "./pages/PagesTeamDetails";
import Blog from "./pages/Blog";
import ServicesLayout2 from "./pages/ServicesLayout2";
import ServicesDetails from "./pages/ServicesDetails";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            <>
              
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages"
          element={
            <>
           
              <Navbar />
              <Pages />
              <Footer />
            </>
          }
        />
         <Route
          path="/pages/team-details/:id"
          element={
            <>
           
              <Navbar />
              <PagesTeamDetails />
              <Footer />
            </>
          }
        />
         <Route
          path="/pages/team-details/:id"
          element={
            <>
           
              <Navbar />
              <PagesTeamDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/blogslayout2"
          element={
            <>
           
              <Navbar />
              <Blog />
              <Footer />
            </>
          }
        />

        <Route
          path="/serviceslayout2"
          element={
            <>
           
              <Navbar />
              <ServicesLayout2 />
              <Footer />
            </>
          }
        />  

         <Route
          path="/servicesdetails"
          element={
            <>
           
              <Navbar />
              <ServicesDetails />
              <Footer />
            </> 
          }
        /> 

        <Route
          path="/contact"
          element={
            <>
           
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />  
      </Routes>
    </Router>
  );
}

export default App;
