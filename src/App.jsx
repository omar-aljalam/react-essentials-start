import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";


const reactDescription = ["Fundamental", "Crucial", "Cire"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {
  const description = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConecpt({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function renderCoreConcepts() {
  return CORE_CONCEPTS.map((conecpt) => {
    return <CoreConecpt {...conecpt} />;
  })
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {renderCoreConcepts()}
          </ul>
          </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
