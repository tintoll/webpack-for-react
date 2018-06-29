const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  // webpack 설정 부분
  mode: "development",
  entry: "./src/index.js",
  output: {
    //  [hash]는 애플리케이션이 수정되어 다시 컴파일 될 때마다 웹팩에서 생성된 해시로 변경해주어 캐싱에 도움이 된다.
    filename: "[name].[hash].js",
    // Hot reloading 은 중첩된 경로에서 동작하지 않는다.
    publicPath: "/"
  },
  // 소스 맵(source maps)을 생성해 애플리케이션 디버깅을 도와준다
  // 소스 맵에는 여러 가지 유형이 있으며 그 중 inline-source-map은 은 개발시에만 사용된다
  devtool: "inline-source-map",
  module: {
    rules: [
      // 첫번째 룰 : node_modules 디렉터리를 제외한 자바스크립트 파일을 찾은 다음 babel-loader를 통해 바벨을 사용해 바닐라 자바스크립트로 변환한다.
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },

      // 두번째 룰 : css 파일을 찾고 style-loader와 css-loader로 css를 처리한다.
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  // html-webpack-plugin은 다른 옵션을 가진 객체를 받는다. HTML 템플릿과 favicon을 지정한다.
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico"
    }),
    // HMR 업데이트시 브라우저 터미널에 표시해 알아보기 쉽게 한다.
    new webpack.HotModuleReplacementPlugin()
  ],
  // 브라우저가 자동으로 열리고 애플리케이션이 자동으로 실행된다.
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
    // 서버에 HMR 작동을 허락한다.
    hot: true
  }
};