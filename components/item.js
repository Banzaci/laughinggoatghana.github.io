const Item = ({ title, image, ingress, style }) => (
  <div className="item">
    { title && <div className="title"><h1>{title}</h1></div>}
    <div className="image"><img src={image} style={style}/></div>
    { ingress && <p>{ingress}</p> }
    <style jsx>{`
      .item {
        width: 100%;
      }
      .title {
        display:flex;
        padding: 5px 0;
        max-height: 55px;
        vertical-align: bottom;
      }
      .title h1 {
        font-size: 1.1em;
        align-self: flex-end;
      }
      p {
        padding: 5px 0;
      }
      .image {
        width: 100%;
        max-height: 210px;
        overflow: hidden;
      }
      `}</style>
  </div>
)

export default Item
