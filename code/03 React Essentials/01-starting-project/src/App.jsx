import {useState} from 'react';

import MainGoal from "./components/MainGoal/MainGoal";
import Header from "./components/Header/Header"
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import { CORE_CONCEPTS, EXAMPLES } from './data/data';
import TabButton from "./components/TabButton/TabButton";


function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();
  
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre> 
      </div>
    );
  } 

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
           {CORE_CONCEPTS.map((concept) => <CoreConcepts key={concept.title} {...concept}/>)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isActive={selectedTopic === 'components'} onClick={() => handleClick('components')}>Component</TabButton>
            <TabButton isActive={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isActive={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isActive={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
          </menu>
          {tabContent}         
        </section>
        <MainGoal />
      </main>
    </div>
  );
}

export default App;
