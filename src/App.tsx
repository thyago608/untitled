import { CreateAnAccount } from "./components/CreateAnAccount";
import { Hero } from "./components/Hero";
import "./styles/main.css";

function App() {
  return (
    <main className="min-h-[100vh] grid grid-cols-homeMobile lg:grid-cols-homeDesktop">
      <Hero />
      <CreateAnAccount />
    </main>
  );
}

export default App;
