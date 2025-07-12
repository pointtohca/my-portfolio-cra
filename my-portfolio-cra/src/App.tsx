import React from 'react';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import { Footer } from './sections/Footer/Footer';
import { AnimatedSection } from './components/AnimatedSection/AnimatedSection'; // 1. Импортируем

function App() {
  return (
    <div className="App">
      <main>
        <AnimatedSection>
          {' '}
          {/* 2. Оборачиваем */}
          <About />
        </AnimatedSection>

        <AnimatedSection>
          {' '}
          {/* 3. Оборачиваем */}
          <Projects />
        </AnimatedSection>
      </main>

      <AnimatedSection>
        {' '}
        {/* 4. Оборачиваем */}
        <Footer />
      </AnimatedSection>
    </div>
  );
}

export default App;
