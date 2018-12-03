import Block from './block'
import Instagram from './instagram'
import Tours from './tours'
import Rooms from './rooms'
import Surfing from './surfing'
import Container from './container'
import Paragraf from './paragraf'
import Link from 'next/link'

const Home = () => (
  <div>
    <Block>
      <Container>
        <div className="ingress">
          <h1>Laughing Goat Ghana / Surfcamp in Busua Beachs</h1>
          <Paragraf>
            Welcome to visit Laughing Goat in Busua Beach only 2 minutes walk to the beach. Nice and clean rooms and super friendly staff.
          </Paragraf>
          <div className="book">
            <Link prefetch href="/contact"><a className="book-href">Book now</a></Link>
          </div>
        </div>
      </Container>
    </Block>
    <Block style={{marginTop: 120}}><Rooms /></Block>
    <Block><Tours /></Block>
    <Block><Surfing /></Block>
    <Block><Instagram /></Block>
    <style jsx>{`
      .ingress {
        padding: 20px 10px;
        text-align: center;
      }
      .ingress h1 {
        margin-bottom: 20px;
      }
      .book {
        text-align: center;
        background-color: rgb(255,165,0);
        border-radius: 30px;
        max-width: 200px;
        margin: 30px auto 0;
        padding: 10px 0;
      }
      .book-href {
        font-size: 24px;
        font-weight: bold;
        color: #000;
      }
      `}</style>
  </div>
)

export default Home
