import "./App.css";
import SideNav from "./components/navs/sideNav";
import TopNav from "./components/navs/topNav";
import Dashboard from "./components/dashboard";

function App(props) {
  return (
    <div className="MainContainer lg:ml-[200px] h-[calc(100vh-105px)] mt-[65px]  px-7 overflow-y-auto">
      <SideNav></SideNav>
      <TopNav></TopNav>

      <main className="h-full relative">
        {props.children}

        <Dashboard></Dashboard>

      </main>
    </div>
  );
}

export default App;
