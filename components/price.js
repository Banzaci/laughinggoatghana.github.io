const Price = ({ price, save }) => (
  <div className="paragraf">
    <h3>{price}</h3>
    <style jsx>{`
      h3 {
        margin-bottom:5px;
        padding: 0;
      }
      h4 {
        color: orange;
      }
      .paragraf {
        text-align: center;
        padding: 0;
        max-width: 500px;
        margin: 0 auto;
      }
      `}</style>
  </div>
)

export default Price
