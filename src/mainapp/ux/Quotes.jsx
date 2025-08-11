import { useLoaderData } from "react-router-dom"
import { Card } from "./Card";
export const Quotes = () => {
    const quotesData = useLoaderData();
    console.log(quotesData);
    // Loop through each item in quotesData array ,Each <li> needs a unique key — here we use the index
    return (
        <ul>
            {quotesData.map((currQuote, index) => (
                <li key={index}>
                    <Card quote={currQuote.quote} author={currQuote.author} />
                </li>
            ))}
        </ul>
    );
}
