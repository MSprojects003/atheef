import NavigationBar from "./components/custom/NavigationBar";

 

 

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      <main className="pt-16 pb-20 md:pb-0"> {/* Padding for navs */}
        <section id="home"> {/* Your Home content */} </section>
        <section id="about"> {/* About content */} </section>
        <section id="skills"> {/* Skills content */} </section>
        <section id="projects"> {/* Projects content */} </section>
        <section id="cv"> {/* CV content (e.g., resume embed or download link) */} </section>
      </main>
    </div>
  );
}
export default App;