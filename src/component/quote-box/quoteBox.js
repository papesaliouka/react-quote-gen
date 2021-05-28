import './quoteBox.styles.css'
const QuoteBox=({author, quote, request})=>(
    <div id="quote-box">
        <p id='text'>{quote}</p>
        <span id="author">{author}</span>
        <div className="button">
        <button id="new-quote" onClick={()=> request()}>New Quote</button>
        <i><a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a></i>
        </div>
    </div>
)
export default QuoteBox