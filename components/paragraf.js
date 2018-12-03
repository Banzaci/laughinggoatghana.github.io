const Paragraf = ({ children }) => (
  <div className="paragraf">
    <p>{children}</p>
    <style jsx>{`
      .paragraf {
        text-align: center;
        padding: 10px 0;
        max-width: 500px;
        margin: 0 auto;
      }
      `}</style>
  </div>
)

export default Paragraf
