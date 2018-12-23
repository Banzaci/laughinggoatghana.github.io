import Container from './container'
import Paragraf from './paragraf'
import SubHeader from './subheader'
import Price from './price'
import Button from './button'

const arr = [
  {
    header: 'Weekend package',
    included:[
      'Two nights in double room with private bathroom',
      'Two surf lessons',
      'Two days of free use of surfboards',
      'Breakfast included both days',
      'One lunch or dinner'
    ],
    price: '$99 for one person in private bedroom ($69 per person to share a double room with private bathroom)',
    image: 'LOGO_multi.svg',
  },
  // {
  //   header: 'One Week package',
  //   included:[
  //     'Seven nights in double room with private bathroom',
  //     'Four surf lessons',
  //     'Seven days of free use of surfboards',
  //     'Breakfast included',
  //     'Seven lunches or dinner'
  //   ],
  //   price: '$99 for one person in private bedroom ($69 per person to share a double room with private bathroom)',
  // },
]
const logo = () => (
  <div className="logo">
    <img src="../static/LOGO_multi.svg" />
    <style jsx>{`
      .logo {
        width:150px;
        position: absolute;
        top: 20px;
        right: 20px;
        transform: rotate(20deg);
      }
      img {
        width:100%;
      }
      @media (max-width:500px) {
        .logo {
          transform: rotate(0deg);
          width: 100px;
          position:relative;
          top: auto;
          right: auto;
          margin: 0 auto;
        }
      }
    }
    `}</style>
  </div>)
const renderIncluded = (included) => included.map(list => <li>- {list}</li>)
const render = () => arr.map(({header, included, price}, index) => (<div className="block">
  <SubHeader>{header}</SubHeader>
  {logo()}
  <Paragraf>
    <ul>{renderIncluded(included)}</ul>
  </Paragraf>
  <Price price={price} />
  <style jsx>{`
    ul {
      flex-direction: column;
    }
    img {
      width:100%;
    }
  .block {
    position:relative;
    ${index !== (arr.length-1) && `border-bottom: 1px solid #DDD;`}
    padding-bottom: 20px;
    max-width: 680px;
    margin: 0 auto 10px;
  `}</style>
</div>))

const Contact = () => (
  <Container>
    {render()}
  </Container>
)

export default Contact
