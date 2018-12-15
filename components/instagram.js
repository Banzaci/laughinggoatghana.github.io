import {Component} from 'react'
import Title from './title'
import Container from './container'
import fetch from 'node-fetch'
const data = []
const url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=5672187581.1677ed0.bb4097a58e044ceca1a50e65a0f82613'
const render = ({url}) => {
  return (
    <div className="image">
      <img src={url} />
      <style jsx>{`
        img {
          max-width: 260px;
          max-height: 180px;
        }
        .image {
          text-align: center;
          background-color: #CCC;
          max-width: 260px;
          max-height: 180px;
          margin: 10px auto;
        }
      `}</style>
    </div>
  )
}
class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = { data };
  }
  componentDidMount(){
    fetch(url)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({data})
      });
  }
  render() {
    const container = this.state.data.map(({ images })=> render(images.low_resolution));
    return (
      <div>
      <Container>
        <Title content="@ Follow us on Instagram" href="https://www.instagram.com/laughinggoatghana/" />
        <div className="instagram">{container}</div>
        <style jsx>{`
          .instagram {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
          }
        `}</style>
        </Container>
      </div>
    )
  }
}

export default Instagram
