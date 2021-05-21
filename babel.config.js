module.exports = {
  presets: [
    '@babel/preset-env', // 为旧的浏览器提供现代浏览器的特性
    '@babel/preset-react', // 真的react的预设 例如JSX
  ],
  plugins: [],
};

// babel-loader 使用 Babel 转换 JavaScript依赖关系的 Webpack 加载器
// babel-core，将 ES6 代码转换为 ES5
