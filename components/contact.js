import Title from './title'
import Container from './container'
import Paragraf from './paragraf'
import Button from './button'

const Contact = () => (
  <Container>
    <Title content="Contact" />
    <Paragraf>
      Have a question for The Laughing Goat or want to book accommodation? We would love to hear from you. Please send an email to us and we will reply as soon as we can. You can also call us on <a style={{color: 'black', fontWeight: 'bold'}} href="tel:+233545810245">+233545810245.</a>
    </Paragraf>
    <div className="img-container"><img src="../static/map.png" /></div>
    <Button
      text="Contact us"
      href="mailto:laughinggoatghana@gmail.com"
    />
    <style jsx>{`
      .img-container {
        width: 100%;
        text-align:center;
      }
      img {
        max-width: 80%;
      }
      @media (max-width:500px) {
        .img-container {
          max-width: 100%;
        }
        img {
          margin-top:10px;
        }
      }
    `}</style>
  </Container>
)

export default Contact
