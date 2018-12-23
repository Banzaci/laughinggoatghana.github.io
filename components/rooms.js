import Item from './item'
import Title from './title'
import Container from './container'
import Paragraf from './paragraf'

const rooms = [
  {
    title:"Double Room with Private Bathroom ",
    image:"../static/rooms/room4.jpg",
    ingress:"Price, $32 per room & per night",
  },
  {
    title:"Triple Room with Private Bathroom",
    image:"../static/rooms/room2.jpg",
    ingress:"Price, $36 per room & per night",
  },
  {
    title:"Quadruple Room with Private Bathroom",
    image:"../static/rooms/room1.jpg",
    ingress:"Price, $40 per room & per night",
  },
  {
    title:"Budget Single Room",
    image:"../static/rooms/room5.jpg",
    ingress:"For one person. Price, $15 per room & per night. (for 2 people, $25)",
  },
  {
    title:"Canvas Tent #1",
    image:"../static/rooms/canvas.jpg",
    ingress:"Coming soon",
  },
  {
    title:"Canvas Tent #2",
    image:"../static/rooms/canvas.jpg",
    ingress:"Coming soon",
  }
]

const render = () => rooms.map(({ title, image, ingress }, index) => (
  <div className="room" key={index}>
    <Item
      title={title}
      image={image}
      ingress={ingress}
      style={{ maxWidth:'280px', maxHeight:'200px' }}
    />
    <style jsx>{`
      .room {
        display: flex;
        width: 280px;
        height: 300px;
        margin: 10px auto 0;
        overflow:hidden;
      }
    `}</style>
  </div>
))

const Rooms = () => (
  <Container>
    <Title content="Our rooms" />
    <Paragraf>
      For long term stay, receive discount. Please contact us for an inquiry.
    </Paragraf>
    <div className="rooms">
      { render() }
    </div>
    <style jsx>{`
      .rooms {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
      }
      `}</style>
  </Container>
)

export default Rooms
