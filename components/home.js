import Block from './block'
import Instagram from './instagram'
import Tours from './tours'
import Rooms from './rooms'
import Surfing from './surfing'
import Container from './container'
import Paragraf from './paragraf'
import Package from './package'
import BookNow from './book-now'

const Home = () => (
  <div>
    <Block>
      <Container>
        <div className="ingress">
          <h1>Laughing Goat Ghana / Surfcamp in Busua Beach</h1>
          <Paragraf>
            Welcome to visit Laughing Goat in Busua Beach only 2 minutes walk to the beach. Nice and clean rooms and super friendly staff.
          </Paragraf>
          <BookNow />
        </div>
      </Container>
    </Block>
    <Block><Package /></Block>
    <Block><Rooms /></Block>
    <Block><Surfing /></Block>
    <Block><Instagram /></Block>
    <Block style={{marginBottom: 30, marginTop: 30}}><BookNow /></Block>
    <style jsx>{`
      .ingress {
        padding: 20px 10px;
        text-align: center;
      }
      .ingress h1 {
        margin-bottom: 20px;
      }

      `}</style>
  </div>
)

export default Home
