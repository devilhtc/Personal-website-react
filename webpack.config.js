var config = {
   entry: './main.js',

   output: {
      path:'/Users/kevinhe/Dropbox/Projects/personal-website-react/',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }, {
           test: /\.css$/,
           loader: 'style-loader'
         }, {
           test: /\.css$/,
           loader: 'css-loader',
           query: {
             modules: true,
             localIdentName: '[name]__[local]___[hash:base64:5]'
           }
         }
      ]
   }
}

module.exports = config;
