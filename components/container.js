const Container = ({children}) => (
  <div className="container">
    {children}
    
    <style jsx>{`
      .container {
        border-radius: 30px;
        padding: 20px;
        max-width: 940px;
        margin: 50px auto 0;
        height: 100%;
        background: rgba(255, 255, 255, .94);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
      }
      @media (max-width:500px) {
        .container {
          padding: 6px 14px;
          margin: 0 auto;
        }
      }
      `}</style>
  </div>
)

export default Container
