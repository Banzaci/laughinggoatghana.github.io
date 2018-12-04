const Block = ({ children, style }) => (
  <div className="block" style={style}>
    { children }
    <style jsx>{`
      .block {
        max-width: 900px;
        margin: 50px auto 0;
      }
      `}</style>
  </div>
)

export default Block
