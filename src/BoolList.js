
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
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
        <p>
          Reprehenderit ad cillum ex Lorem aliquip dolore sunt. Dolor quis incididunt et culpa eiusmod est fugiat in non. Sunt nulla mollit commodo aliquip qui adipisicing et magna. Commodo mollit elit eiusmod laborum consequat dolore exercitation ipsum pariatur cupidatat. Velit laborum exercitation officia eiusmod dolore veniam pariatur cillum proident id. Cillum ad laboris Lorem do.
        </p>
      </Book>
      <Book img={secondBook.img} title={firstBook.title} author={secondBook.author}/>
    </section>
  );
}
const Book =(props)=>{
  const {img, title, author, children} =props;
  console.log(props)
    return <article className='book'>
  
    <img src={img} alt=""></img>
   <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
  </article>
}



export default BoolList;
