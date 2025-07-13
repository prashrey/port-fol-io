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
        <ResumeContent />
      </main>
      <footer className="footer">
        <p>&copy; 2025 All 0 rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
