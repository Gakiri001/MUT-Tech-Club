import Hero from "./Hero"
import Clubgoals from "./Clubgoals"
import Aboutus from "./Aboutus"
import Testimonials from "./Testimonials"
function Home() {
  return (
    <section className="Home">
      <Hero/>
      <Clubgoals/>
      <Aboutus/>
      <Testimonials/>
    </section>
  )
}

export default Home