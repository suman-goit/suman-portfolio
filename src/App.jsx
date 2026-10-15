import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="ambient ambient-top" />
      <Header />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Education />
      </main>
      <Footer />
    </>
  )
}