
// import Navbar from "./components/Navbar"
// import HeroSection from "./components/pages/HeroSection"
// import Footer from "./components/Footer"
// // import ServicesLayout2 from "./components/pages/ServicesLayout2"
// function App() {
//   return (
//     <div>
//       <Navbar />
//       <HeroSection  />
// {/* 
//       <ServicesLayout2 /> */}
//       <Footer />
//     </div>
//   )
// }

// export default App


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Topbar from "./components/Topbar";

// Pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Pages from "./pages/Pages";
// import Blog from "./pages/Blog";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<><Topbar /><Home /></>} />  {/* Topbar sirf Home page par */}
//         <Route path="/about" element={<About />} />
//         <Route path="/pages" element={<Pages />} />
//         <Route path="/blog" element={<Blog />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Topbar from "./components/Topbar";

// // Pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Pages from "./pages/Pages";
// import Blog from "./pages/Blog";

// function Layout() {
//   const location = useLocation();

//   const isHome = location.pathname === "/"; // Check if current page is Home

//   return (
//     <>
//       {isHome && <Topbar />}   {/* Sirf Home pr Topbar */}
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/pages" element={<Pages />} />
//         <Route path="/blog" element={<Blog />} />
//       </Routes>
//       {!isHome && <Footer />}  {/* Sirf Home ke alawa pages pr Footer */}
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Layout />
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Topbar from "./components/Topbar";
// Pages
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
        {/* Home ka apna complete layout */}
        <Route path="/" element={<Home />} />

        {/* Baaki pages ke liye common Navbar + Footer */}
        <Route
          path="/about"
          element={
            <>
              {/* <Topbar /> */}
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
            {/* <Topbar /> */}
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
            {/* <Topbar /> */}
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
            {/* <Topbar /> */}
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
            {/* <Topbar /> */}
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
            {/* <Topbar /> */}
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
            {/* <Topbar /> */}
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
