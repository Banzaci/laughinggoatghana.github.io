import Link from 'next/link'

const linkList = [
  {name:'Home', url:'/'},
  {name:'Rooms', url:'/rooms'},
  {name:'Tours', url:'/tours'},
  {name:'Surfing', url:'/surfing'},
  {name:'Food', url:'/food'},
  {name:'Contact', url:'/contact'},
]

const styles = {
  ul: {
    marginBottom: 30,
  },
  img: {
    width:150,
  },
  container:{
    display: 'flex',
    alignItems: 'flex-end',
    margin: '0 auto',
  },
}

const navigation = () => (linkList.map(({name, url})=> <li>
<Link as={`${process.env.ASSET_PREFIX}/${url}`} prefetch href={url}><a className="nav">{name}</a></Link></li> ))
const logo = () => (<div style={styles.img}><img src="./static/LOGO_white.svg" /></div>)

export default () => (
  <nav style={styles.container}>
    { logo() }
    <ul style={styles.ul}>
      { navigation() }
      <style jsx global>{`
          .nav {
            color: white;
            font-weight: bold;
            padding: 10px 20px;
          }
          .nav:hover {
            text-decoration: underline;
            color: #333;
            font-weight: bold;
            background:white;
            border-radius: 10px;
          }
        `}</style>
    </ul>
  </nav>
)
