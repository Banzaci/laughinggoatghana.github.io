import Title from './title'
import Container from './container'
import Paragraf from './paragraf'
import Button from './button'

const Contact = () => (
  <Container>
    <Title content="Contact" />
    <Paragraf>
      Have a question for The Laughing Goat or want to book accommodation? We would love to hear from you. Please send an email to us and we will reply as soon as we can.
    </Paragraf>
    <Button
      text="Contact us"
      href="mailto:laughinggoatghana@gmail.com"
    />
  </Container>
)

export default Contact
