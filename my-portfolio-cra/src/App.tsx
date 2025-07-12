import React from 'react';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import { Footer } from './sections/Footer/Footer';
import { AnimatedSection } from './components/AnimatedSection/AnimatedSection';

function App() {
  return (
    <div className="App">
      <main>
        <AnimatedSection>
          <About />
        </AnimatedSection>

        <AnimatedSection>
          <Projects />
        </AnimatedSection>
      </main>

      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
}

export default App;
