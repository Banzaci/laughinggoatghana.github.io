import Container from './container'
const media = [
  {
    name: 'DIY Busua Beach – Ghana, Africa',
    link: 'http://www.confuzine.com/tag/busua-beach/'
  },
  {
    name: 'Ghana\'s First and Only Crew of Skateboarders - Vogue',
    link: 'https://www.vogue.com/projects/13538019/ghana-skateboarders-skate-nation-accra-photos/'
  },
  {
    name: 'A brief history of skateboarding in Busua...',
    link: 'https://skatetourgh.com/2018/01/04/a-brief-history-of-skateboarding-in-busia-before-a-park-before-a-bowl-and-before-sponsors/'
  },
  {
    name: 'Asa Baako',
    link: 'https://www.asabaako.com/'
  },
  {
    name: 'Lonely Planet',
    link: 'https://www.lonelyplanet.com/ghana/busua'
  },
]
const renderArticles = () => media.map(({name, link})=> <li>
  <a href={link} target="_blank">{name}</a>
  <style jsx>{`
    li {
      width: 100%;
      text-align:center;
      padding: 10px 0;
      font-weight: bold;
    }
    a {
      color: black;
    }
  `}</style>
</li>)
const Articles = ({ src, style }) => (
  <Container>
    <ul>
    {
      renderArticles()
    }
    </ul>
  </Container>
)

export default Articles
