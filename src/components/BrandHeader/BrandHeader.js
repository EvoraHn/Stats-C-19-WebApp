import NavBar from "../NavBars/NavBar";
import Brand from "./Brand";
import "./BrandHeader.css";


function BrandHeader({ children }){
  return (
    <header>
     
      <Brand  title="Covid Stats"></Brand>
     
      <NavBar></NavBar>
     
    </header>
  );
}

export default BrandHeader;
