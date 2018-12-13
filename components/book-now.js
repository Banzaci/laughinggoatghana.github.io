import Link from 'next/link'
const BookNow = () => (
  <div className="book">
    <Link prefetch href="/contact"><a className="book-href">Book now</a></Link>
    <style jsx>{`
      .book {
        text-align: center;
        background-color: rgb(255,165,0);
        border-radius: 30px;
        max-width: 200px;
        margin: 30px auto 0;
        padding: 10px 0;
      }
      .book-href {
        font-size: 24px;
        font-weight: bold;
        color: #000;
      }
      `}</style>
  </div>
)

export default BookNow
