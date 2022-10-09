
import './App.css';

const firstBook = {
  img: "https://m.media-amazon.com/images/I/71K1PDrlQmL._AC_UL480_FMwebp_QL65_.jpg",
  title: "Twisted Love (Twisted, 1)",
  author: "by Ana Huang"
}
const secondBook ={
  img:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51VC+Vru96L._SY344_BO1,204,203,200_.jpg",
  title: "It Starts with Us: A Novel (2) (It Ends with Us)",
  author:"Colleen Hoover"
}
function BoolList() {
  return (
    <section className='booklist' >   
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={secondBook.img} title={firstBook.title} author={secondBook.author}/>
    </section>
  );
}
const Book =(props)=>{
  const {img, title, author} =props;
  console.log(props)
    return <article className='book'>
  
    <img src={img} alt=""></img>
   <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
}



export default BoolList;
