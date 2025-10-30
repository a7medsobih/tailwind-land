import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import Feature from "./sections/Feature"
import StayProductive from "./sections/StayProductive"
import Testimonials from "./sections/Testimonials"
import GetStarted from "./sections/GetStarted"

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <StayProductive />
      <Testimonials />
      <GetStarted />
      <Footer />
    </>
  )
}

export default App