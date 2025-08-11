import '../ui/Card.css';
export const Card = ({ quote, author }) => {
    return (
        <section className="quote-card-section">
            <div className='quote-card'>
                <div className="quote-card-quotes">
                    {/*
                     <blockquote> :semantic HTML tag for a section quoted from another source.
                     “{quote}” : inserts your quote prop inside quotation marks.
                     <footer> :holds the author’s name. 
                    */}
                    <blockquote>
                        “{quote}”
                        <footer>— {author}</footer>
                    </blockquote>

                </div>
            </div>
        </section>
    )
}