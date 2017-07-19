module.exports = {
    entry: "./controller.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'jsx-loader?harmony'

        },
            {test: /\.jsx?$/, loader: 'babel-loader'}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'
        ]
    }
    //add externalities later

}
;