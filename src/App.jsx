import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import ResumeContent from "./components/ResumeContent/ResumeContent";

function App() {
  return (
    <>
      <Header />
      <main className="main-wrap">
        <Profile />
        {/* <section id="experience" className="section">
          <h2>Experience</h2>
        </section>
        <section id="projects" className="section">
          <h2>Projects</h2>
        </section>
        <section id="summary" className="section">
          <h2>Summary</h2>
        </section> */}
        <ResumeContent />
      </main>
      <footer className="footer">
        <p>&copy; 2025 All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
