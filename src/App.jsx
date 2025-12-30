import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConceptList from "./components/CoreConcept/CoreConceptList.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConceptList concepts={CORE_CONCEPTS} />
          </ul>
          </section>
      </main>
    </div>
  );
}

export default App;
