import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";
import ProjectSection from "./components/ProjectSection";
import ContactMeSection from "./components/ContactMeSection";

function App() {

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header/>
          <LandingSection/>
          <ProjectSection/>
          <ContactMeSection/>
          <Footer/>
        </main>
      </AlertProvider>
    </ChakraProvider>
  )
}

export default App
