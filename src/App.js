import React from "react";
import PaintingList from "./components/PaintingList";
import paintings from "./paintings.json";
import Logo from "./components/Logo";
import Panel from "./components/Panel";

const numbers = [1, 2, 3, 4, 5];
const names = ["Anna", "Julia", "Valeria", "Viktoria"];

const App = () => {
  return (
    <div>
      <Panel title="Последние новости">
        <p> Привет</p>
      </Panel>
      <Panel title="Последние новости">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenea
        </p>
        <a href="">Читать...</a>
      </Panel>
      <Logo />

      <PaintingList paintings={paintings} />

      {/* <ul>
        {numbers.map((number) => (
          <li>{number}</li>
        ))}
      </ul>

      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul> */}

      {/* <ul>
        {paintings.map(({ id, url, title, price, author, quantity }) => (
          <li key={id}>
            <Painting
              url={url}
              title={title}
              price={price}
              profileURL={author.url}
              tag={author.tag}
              quantity={quantity}
            />
          </li>
        ))}
      </ul> */}

      {/* <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        price={paintings[0].price}
        profileURL={paintings[0].author.url}
        tag={paintings[0].author.tag}
        quantity={paintings[0].quantity}
      />
      <Painting
        url={paintings[1].url}
        title={paintings[1].title}
        price={paintings[1].price}
        profileURL={paintings[1].author.url}
        tag={paintings[1].author.tag}
        quantity={paintings[2].quantity}
      /> */}
    </div>
  );
};

export default App;
