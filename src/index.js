import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// <<--------------Создание React-элементов------------------>>

// const link = React.createElement(
//   "a",
//   { href: "reactjs.org", target: "_blank" },
//   "Ссылка!"
// );

// <<---------Создание React-элементов с помощью JSX------------>>
// const jsxLink = (
//   <a href="reactjs.org" target="_blank">
//     Ссылка!
//   </a>
// );

// console.log(link);
// console.log(jsxLink);

// ReactDOM.render(link, document.getElementById("root"));

// const imageDescrition = {
//   id: "id-3",
//   url:
//     "https://cdn.pixabay.com/photo/2017/09/04/22/40/flowers-2715804_1280.jpg",
//   title: "Flowers. Tulip nature art abstract",
//   price: 600,
//   author: {
//     tag: "ractapopulous",
//     url: "https://pixabay.com/users/ractapopulous-24766/",
//   },
//   quantity: 5,
// };

// <<--------------Создание шаблона элемента------------------>>

// const template = (
//   <div>
//     <img src={imageDescrition.url} alt={imageDescrition.title} width="480" />
//     <h2>{imageDescrition.title}</h2>
//     <p>
//       Автор:
//       <a href={imageDescrition.author.url}>{imageDescrition.author.tag}</a>
//     </p>
//     <p>Цена: {imageDescrition.price} кредитов</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );

// console.log(template);

// ReactDOM.render(template, document.getElementById("root"));

// <<--------------------------------------------------------->>
