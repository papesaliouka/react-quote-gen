import QuoteBox from './component/quote-box/quoteBox';
import {useState, useEffect} from 'react'
function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState('');
  const rand=()=> (Math.floor(Math.random()*100))
  const request =() => {
    return(
    fetch("https://type.fit/api/quotes")
    .then(response=> response.json())
    .then(data=> {setQuote(data[rand()].text); setAuthor(data[rand()].author)})
    );
  }
  useEffect(()=> request(),[])
  return (
    <div className="App">
      <QuoteBox quote={quote} author={author} request={request}/>
    </div>
  );
}

export default App;
