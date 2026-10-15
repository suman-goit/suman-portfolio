import { GraduationCap, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section className="section-wrap section-block education-section" id="education">
      <SectionHeading eyebrow="Education" title="Building my foundation." description="Developing engineering fundamentals alongside practical project experience." />
      <article className="education-card">
        <div className="education-icon"><GraduationCap size={25} /></div>
        <div className="education-details">
          <span className="education-label">UNDERGRADUATE STUDIES</span>
          <h3>Computer Engineering</h3>
          <p className="education-school">IOE, Purwanchal Campus</p>
          <p className="education-location"><MapPin size={14} /> Dharan, Nepal</p>
        </div>
        <div className="education-stage"><span className="stage-dot" /> Fourth year · First part</div>
      </article>
    </section>
  )
}