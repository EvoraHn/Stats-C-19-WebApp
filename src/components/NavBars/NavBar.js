import NavBarItems from "./NavBarItems";
import "./NavBar.css";
function NavBar() {
  let dummyData = [
    { label: "Mundo", uri: "/" },
    //si desea más items solo es agregarlos en esta parte
  ];
  let navBarItems = dummyData.map((o, i)=>{
    return (
            <div>
              <ul>
                <NavBarItems 
                  label={o.label}
                  uri={o.uri}
                  key={i}>
                </NavBarItems>
                <button style={{backgroundColor :"#118ab2",color:"#fff",width:"180%",paddingLeft:"5%",marginRight:"20px",paddingRight:"5%"}}>Recargar</button>
              </ul>
            </div>
          );
  });
  return (
    <nav>
      <ul>
        {navBarItems}
      </ul>
    </nav>
  );
}

export default NavBar;
