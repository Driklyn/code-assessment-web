# Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To start a development server:

```
npm start
```

## Tasks

Please publish your work to a fork of this repo. You're welcome (but not required) to add any libraries you think would be helpful.

Note: You're encouraged to show your work by including multiple commits - we'll be looking through your fork's git history.

1. [Implement Responsive Design](/tasks/01-responsive-design.md)
2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
3. [Hook Up Product API](/tasks/03-product-api.md)

Please also update this README file: we'd love to see notes on your decision-making process, links to the most exciting pieces of code, or anything else that will give us additional context when reviewing your assessment.

-----

## Decision Making

1. There was no mockup for the modal when the cart contains a product on desktop/tablet, so I improvised a design using the mockup for mobile and the storefront mockups as references.
2. I added the package `enzyme-to-json` to enable better [Jest snapshots for the Button component](/src/components/__snapshots__/Button.spec.js.snap).
3. I used [flex/grid](/src/containers/CartContainer.css#L15,L21) for centering DOM elements both horizontally and vertically.
4. I used [BEM naming](/src/components/Cart.css) for encapsulating CSS styles within each component and container.
5. I used [CSS variables](/src/containers/CartContainer.css#L37,L46) (where I thought useful) to control the values of multiple CSS properties simultaneously instead of adding additional packages, such as LESS, SASS, or PostCSS.
6. I used the semantically consise "boolean casting and double ampersand" approach for [optionally rendering JSX elements](/src/components/ProductItem.js#L27,L50).
7. I only tested this using the latest version of Chrome on Windows (as this is my current development setup).
