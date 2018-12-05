import Link from 'next/link'

const linkList = [
  {name:'Home', url:'/'},
  {name:'Rooms', url:'/rooms'},
  {name:'Tours', url:'/tours'},
  {name:'Surfing', url:'/surfing'},
  {name:'Food', url:'/food'},
  {name:'Contact', url:'/contact'},
]

const navigation = () => (linkList.map(({name, url}, index)=> <li>
<Link prefetch href={url} key={index}><a className="nav">{name}</a></Link>
  <style jsx>{`
    .nav {
      color: white;
      font-weight: bold;
      padding: 10px 20px;
      display: flex;
    }
    .nav:hover {
      text-decoration: underline;
      color: #333;
      font-weight: bold;
      background:white;
      border-radius: 10px;
    }
  }
  `}</style>
</li> ))

const logo = () => (<div className="logo">
  <img src="../static/LOGO_white.svg" />
  <style jsx>{`
    .logo {
      width: 150px;
    }
    @media (max-width:500px) {
      .logo {
      }
    }
  }
  `}</style>
</div>)

export default () => (
  <nav className="nav-container">
    { logo() }
    <ul>
      { navigation() }
    </ul>
    <style jsx>{`
        .nav-container {
          display: flex;
          align-items: flex-end;
          margin: 0 auto,
        }
        ul {
          margin-bottom: 30px;
          display: flex;
        }
        @media (max-width:500px) {
          ul {
            margin-top: 20px;
          }
        }
      }
      `}</style>
  </nav>

)
