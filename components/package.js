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
    price: '$99 for one person in private bedroom ($66 per person to share a double room with private bathroom)',
  },
]
const renderIncluded = (included) => included.map(list => <li>- {list}</li>)
const render = () => arr.map(({header, included, price}, index) => (<div className="block">
  <SubHeader>{header}</SubHeader>
  <Paragraf><ul>{renderIncluded(included)}</ul></Paragraf>
  <Price price={price} />
  <style jsx>{`
    ul {
      flex-direction: column;
    }
  .block {
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
