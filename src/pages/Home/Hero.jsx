import "./Home.css"
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className='HeroWrapper'>
      <h1>Murang'a University <span>Tech Club(MUTC)</span></h1>
      <h3>Code the Futu<span>re, Today.</span></h3>
      <div className='Button'>
      <Link className='linkjoin'>Push The Array(Join)</Link>
      <Link className='LinkDev' >Commit 'hello world'</Link>
      </div>
    </section>
  )
}

export default Hero