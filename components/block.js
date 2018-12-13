const Block = ({ children, style }) => (
  <div className="block" style={style}>
    { children }
    <style jsx>{`
      .block {
        max-width: 900px;
        margin: 50px auto 0;
      }
      @media (max-width:500px) {
        .block {
          margin: 0 auto 20px;
        }
      }
      `}</style>
  </div>
)

export default Block
