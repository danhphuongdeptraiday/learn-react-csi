import "./App.css";
import cute_dog from "./assets/cute_dog.jpg";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
  const arrayHeaders = [
    {
      number: 2,
      pageName: "Home",
    },
    {
      number: 5,
      pageName: "About",
    },
    {
      number: 9,
      pageName: "Contact",
    },
    {
      number: 16,
      pageName: "Blog",
    }
  ];
  
  return (
    <div className="App">
      <AppHeader arrayHeaders={arrayHeaders} />
      {/* <AppHeader></AppHeader> */}
      <h1>Danh Phuong</h1>
      <img src={cute_dog} className="my_image" alt="logo" />
    </div>
  );
}

export default App;
