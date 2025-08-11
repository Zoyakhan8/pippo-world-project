export const GetAPI = async () => {
  try {
    const quotes = [];

    for (let i = 0; i < 5; i++) {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
          'X-Api-Key': 'QKR2QP7KTxylhAxup1igyA==ejw9Fafu0dODIKkF'
        }
      });

      const data = await response.json();
      if (data[0]) {
        quotes.push(data[0]);
      }
    }

    quotes.forEach((q, i) =>
      console.log(`${i + 1}. "${q.quote}" — ${q.author}`)
    );

    return quotes;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
