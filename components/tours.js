import Item from './item'
import Title from './title'
import Container from './container'

const tours = [
  {
    title:"Herbal tour",
    image:"",
    ingress:"Our guide will take you around Busua to collect and teach you about the local herbs. After the tour you'll cook tea. One bottle of tea is included. ~ time is 2 hours. Price fr. GH₵40.",
  },
  {
    title:"Island tour",
    image:"",
    ingress:"You will with our guide paddle to the island and back. Good training and something to do when the surf is flat. ~ time is 2 hours. Price fr. GH₵30.",
  },
  {
    title:"Butre tour",
    image:"",
    ingress:"We will take you to the village of Butre to eat lunch. ~ time is 3 hours. Price fr. GH₵20. (lunch not included)",
  },
]

const render = () => tours.map(({ title, image, ingress }) => (
  <div className="tour">
    <Item
      title={title}
      image={image}
      ingress={ingress}
    />
    <style jsx>{`
      .tour {
        display: flex;
        width: 280px;
        height: 320px;
        margin: 10px auto 0;
      }
    `}</style>
  </div>
))

const Tours = () => (
    <Container>
      <Title content="Our tours" />
      <div className="tours">
        { render() }
      </div>
      <style jsx>{`
        .tours {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
        }
        `}</style>
    </Container>
)

export default Tours
