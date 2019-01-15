# Using React to Build Document Scanning App

The demo shows how to use **React** to build a simple document scanning app.

## Getting Started
1. Install dependencies:

    ```bash
    npm install
    ```
2. Add the rule to **node_modules/react-scripts/config/webpack.config.dev.js**:

    ```javascript
    {
        test: /\.js$/,
        include: path.join(paths.appNodeModules, 'dwt'),
        loader: 'script-loader'
    },
    ```
3. Build and run the app:

    ```bash
    npm start
    ```

    ![Dynamic Web TWAIN with React](http://www.codepool.biz/wp-content/uploads/2017/05/react-dwt.PNG)
    
## Blog
[React: Load Global JavaScript Library with Webpack](https://www.codepool.biz/react-webpack-load-javascript-library.html)
