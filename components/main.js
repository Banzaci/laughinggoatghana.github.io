import Head from './head'
import Navigation from './navigation'
import Wrapper from './wrapper'

const Main = ({ children }) => (
  <div className="wrapper">
    <Head />
    <Navigation />
    <Wrapper>
      { children }
    </Wrapper>
    <style jsx>{`
      .wrapper {
        position: absolute;
        top:0;
        left:0;
        width: 100%;
      }
      `}</style>
  </div>
)

export default Main
