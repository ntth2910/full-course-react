
import './App.css';
const books = [
 {
  img: "https://m.media-amazon.com/images/I/71K1PDrlQmL._AC_UL480_FMwebp_QL65_.jpg",
  title: "Twisted Love (Twisted, 1)",
  author: "by Ana Huang"
},
{
  img:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51VC+Vru96L._SY344_BO1,204,203,200_.jpg",
  title: "It Starts with Us: A Novel (2) (It Ends with Us)",
  author:"Colleen Hoover"
},
{
  img:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61CSDTmJNWL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "I'm So Glad You Were Born: Celebrating Who You Are",
  author:"Ainsley Earhardt"
}
]

function BoolList() {
  return (
    <section className='book-list' >   
     {books.map((book, index)=>{
      // const { img, title, author} = book
      console.log("book", book)
// return <Book img={img} title={title} author={author} key={index}/>
return <Book key={index} book={book}/>
     })}
    </section>
  );
}
const Book =(props)=>{
  const {img, title, author} =props.book;
  console.log(props)
    return <article className='book'>
  
    <img src={img} alt=""></img>
   <h1>{title}</h1>
    <h4>{author}</h4>
    
  </article>
}



export default BoolList;
