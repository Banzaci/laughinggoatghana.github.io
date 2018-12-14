import Head from './head'
import Navigation from './navigation'
import Wrapper from './wrapper'
import Layout from './layout'

const Main = ({ children }) => (
  <Layout>
    <Head />
    <Navigation />
    <Wrapper>
      { children }
    </Wrapper>
  </Layout>
)

export default Main
