import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";
import ProjectSection from "./components/ProjectSection";

function App() {

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header/>
          <LandingSection/>
          <ProjectSection/>
          <Footer/>
        </main>
      </AlertProvider>
    </ChakraProvider>
  )
}

export default App
