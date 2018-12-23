const Paragraf = ({ children, bigger=false }) => (
  <div className="paragraf">
    <p>{children}</p>
    <style jsx>{`
      .paragraf {
        text-align: center;
        padding: 10px 0;
        max-width: 500px;
        margin: 0 auto;
        ${bigger ? `font-size: 1.4em;` : ``}
      }
      `}
      </style>

  </div>
)

export default Paragraf
