import ContainerA from "./Components/ContainerA";
import ContainerB from "./Components/ContainerB";
import ContainerC from "./Components/ContainerC";
import ContainerD from "./Components/ContainerD";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App()
{
  return(
    <div>
      <Navbar/>
      <ContainerA/>
      <ContainerB/>
      <ContainerC/>
      <ContainerD/>
      <Footer/>
    </div>
  )
}

export default App