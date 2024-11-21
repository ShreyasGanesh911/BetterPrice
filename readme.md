# BetterPrice: Your Ultimate Price Comparison Tool
Find the best price for any product across top e-commerce giants with BetterPrice. Compares prices from various online stores to help you save time and money, ensuring you never overpay again.


App flow -->

1. User enters the product name in the search bar.
2. The user clicks the search button.
3. The system fetches the product information from various e-commerce websites.
4. The system compares the prices of the product across different websites.
5. The system displays the prices of the product from different websites.

Frontend --> React w/t TS
Backend --> Node.js w/t TS + express + Puppeteer

How backend will work -->
1. User sends a request to the server with the product name.
2. The server uses Puppeteer to navigate to the websites and fetch the product information.
3. The server maps the prices of the product with the name, reviews and img url across different websites. // Sorting to be done here and the top products are compared
4. The server sends the result back to the client.

How frontend will work -->
1. User enters the product name in the search bar.
2. The user clicks the search button.
3. Products are displayed there
4. The user clicks on the product to view the details of the product.
5. The user can sort the products based on price, reviews, and other factors.

Note. Basic UI/UX is to be done. This is more backend emphasized

