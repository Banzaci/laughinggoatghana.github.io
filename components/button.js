const Button = ({ text, href }) => (
  <div className="button">
    <a className="button-href" href={href}>{text}</a>
    <style jsx>{`
      .button {
        text-align: center;
        background-color: rgb(255,165,0);
        border-radius: 30px;
        max-width: 200px;
        margin: 30px auto 0;
        padding: 10px 0;
      }
      .button-href {
        font-size: 24px;
        font-weight: bold;
        color: #000;
      }
      `}</style>
  </div>
)

export default Button
