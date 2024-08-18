import Provider from "./context/Provider";
import Router from "./router/Router";

function App() {
  return (
    <>
       <Provider>
          <Router/>
       </Provider>
          
        
    </>
  );
}

export default App;
