const Title = ({ content, href }) => (
  <div className="title">
    <div className="header"><h1><a href={href}>{content}</a></h1></div>
    <style jsx>{`
      h1 {
        display: inline-block;
        border-bottom: 4px solid #A9A9A9;
        line-height: 42px;
        padding: 0 20px;
      }
      .title {
        max-width: 900px;
        margin: 0 auto 10px;
        padding-top: 20px;
      }
      .header, a {
        text-align: center;
        color: #A9A9A9;
      }
      `}</style>
  </div>
)

export default Title
