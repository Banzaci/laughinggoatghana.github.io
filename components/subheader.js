const SubHeader = ({ children }) => (
  <div className="paragraf">
    <h2>{children}</h2>
    <style jsx>{`
      .paragraf {
        text-align: center;
        padding-top: 10px;
        max-width: 500px;
        margin: 0 auto;
      }
      `}</style>
  </div>
)

export default SubHeader
