const path = require("path");

module.exports = {
    "mode": "development",
    "entry": [
        "./src/Components/countdown-clock.js",
    ],
    "output": {
        "filename": "countdown-clock.js",
        "library": "@crystalclear506/countdown-clock",
        "libraryTarget": "umd"
    },
    "module": {
        "rules": [
            {
                "test": /\.m?js$/,
                "exclude": /(node_modules|bower_components)/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": ["@babel/preset-react"]
                    }
                }
            },
            {
                "test": /\.css$/i,
                "use": [
                    "style-loader",
                    { 
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    },
                ]
            }
        ]
    }
};
