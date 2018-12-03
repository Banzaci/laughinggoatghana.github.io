const Container = ({children}) => (
  <div className="container">
    {children}
    <style jsx global>{`
      .container {
        border-radius: 30px;
        padding: 20px;
        max-width: 940px;
        margin: 0 auto;
        height: 100%;
        background: rgba(255, 255, 255, .94);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
      }
      `}</style>
  </div>
)

export default Container
