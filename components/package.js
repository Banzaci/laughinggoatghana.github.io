import Container from './container'
import Paragraf from './paragraf'
import SubHeader from './subheader'
import Price from './price'
import Button from './button'

const arr = [
  {
    header: 'One week stay with surfing',
    paragraf:'Seven nights in double room with private bathroom including breakfast and seven meals (lunch or dinner), two surf lessons and seven days of board rental.',
    price: 'GH₵1550 (without surfing / GH₵1100)',
    save: 'GH₵182 (without surfing / GH₵122)',
  },
  {
    header: 'Weekend deal with surfing',
    paragraf:'Two nights in double room with private bathroom including breakfast and dinner on Saturday evening or lunch on Sunday, two surf lessons and two days of board rental.',
    price: 'GH₵490 (without surfing / GH₵320)',
    save: 'GH₵77 (without surfing / GH₵27)',
  },
]
const render = () => arr.map(({header, paragraf, price, save}, index) => (<div className="block">
  <SubHeader>{header}</SubHeader>
  <Paragraf>{paragraf}</Paragraf>
  <Price price={price} save={save} />
  <style jsx>{`
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
