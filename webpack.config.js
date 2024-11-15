const path = require('path');

module.exports = [
  {
    // Konfigurasi untuk ESM (Modular)
    entry: './src/simple.js',
    output: {
      filename: 'simple.esm.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'module', // Output sebagai ES Module
      environment: {
        module: true,
      },
    },
    mode: 'production',
    experiments: {
      outputModule: true, // Mengaktifkan eksperimen untuk output module
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  },
  {
    // Konfigurasi untuk UMD (Global)
    entry: './src/simpleumd.js',  // Titik masuk ke library
    output: {
      filename: 'simple.umd.js',
    },
    mode: 'production',  // Mode produksi untuk optimasi
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',  // Transpile ES6+ ke versi JS yang kompatibel
          },
        },
      ],
    },
  },
];
