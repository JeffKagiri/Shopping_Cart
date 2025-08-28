# 🛒 Shopping Cart Project

A simple, responsive shopping cart built with **HTML, CSS, and
JavaScript**.\
Users can adjust item quantities, remove items, like items, and see the
total price update dynamically.

------------------------------------------------------------------------

## 📂 Project Structure

    project/
    │
    ├── index.html        # Main HTML file
    ├── style/
    │   └── style.css     # Styling
    └── js/
        └── script.js     # JavaScript functionality

------------------------------------------------------------------------

## ✨ Features

-   **Quantity Adjustment**\
    Use `+` and `–` buttons to increase or decrease product quantities.

-   **Delete Items**\
    Remove products from the cart using the trash icon.

-   **Like Items**\
    Toggle the heart icon between gray and red to like or unlike a
    product.

-   **Dynamic Total Price**\
    The total updates instantly after every quantity change or deletion.

------------------------------------------------------------------------

## ⚙️ Setup Instructions

1.  Clone or download this project.\
2.  Make sure the structure matches the one above.\
3.  Open `index.html` in your browser to run it.

------------------------------------------------------------------------

## 🔗 File Linking

In `index.html`, include the CSS and JS files correctly:

``` html
<!-- CSS -->
<link rel="stylesheet" href="style/style.css">

<!-- JS (placed before closing </body>) -->
<script src="js/script.js"></script>
```

------------------------------------------------------------------------

## 🎨 Design Choices

-   **Gray → Red Heart Toggle**\
    The heart starts gray and switches to red when liked, handled with a
    `.liked` class in CSS.\
-   **Card Layout**\
    Products are displayed using simple `.card` containers styled with
    Flexbox.\
-   **Clean Updates**\
    JavaScript removes the full product wrapper when deleting to ensure
    totals recalculate correctly.

------------------------------------------------------------------------

## 🚀 Future Improvements

-   Add persistence (save cart to local storage).\
-   Add a checkout button and total summary section.\
-   Animate item deletion for smoother UX.\
-   Add backend integration for real e-commerce scenarios.

------------------------------------------------------------------------

## 📜 License

This project is free to use for learning and personal projects.
