const styles = {}

const PageImage = ({ src, style }) => (
  <div className="image">
    <style jsx>{`
    .image {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -10;
      height:720px;
      max-width: 100%;
      width: 100%;
      background: url(${src}) no-repeat center center fixed;
      background-size: 100%;
    `}</style>
  </div>
)

export default PageImage
