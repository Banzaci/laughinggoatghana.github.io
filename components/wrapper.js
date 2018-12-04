
const Wrapper = ({children}) => (
  <div className="wrapper">
    {children}
    <style jsx global>{`
      .wrapper {
        width: 100%;
        margin: 0;
        padding: 0;
      }
      `}</style>
  </div>
)

export default Wrapper
