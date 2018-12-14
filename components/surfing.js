import Title from './title'
import Item from './item'
import Container from './container'
import Paragraf from './paragraf'

const surfing = [
  {
    title:"Surf rentals at the beach",
    image:"../static/surfing/coconut.jpg",
    ingress:"You can both rent surfboards at Laughing Goat and at the beach. ",
  },
  {
    title:"Early morning surf",
    image:"../static/surfing/morning.jpg",
    ingress:"We try to surf as much as possible. Here, 5:30am.",
  },
  {
    title:"Skateboarding",
    image:"../static/surfing/sk8.jpg",
    ingress:"When there's no surf you can always have a session in the pool.",
  },
]

const render = () => surfing.map(({ title, image, ingress }, index) => (
  <div className="surf" key={index}>
    <Item
      title={title}
      image={image}
      ingress={ingress}
      style={{ maxWidth:'280px', maxHeight:'200px' }}
    />
    <style jsx>{`
      .surf {
        display: flex;
        width: 280px;
        height: 300px;
        margin: 10px auto 0;
        overflow:hidden;
      }
    `}</style>
  </div>
))

const Surfing = () => (
    <Container>
      <Title content="Surfing / skateboarding" />
      <Paragraf>At Laughing Goat you can rent surfboards. If you rent long term, we will reduce the price for you. We also offer paddle tour out to the island, yoga and a tour where you will walk around Busua and collect healthy herbs that we then cook together and drink.</Paragraf>
      <div className="surfing">
        {render()}
      </div>
      <style jsx>{`
        .surfing {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
        }
        `}</style>
    </Container>
)

export default Surfing
