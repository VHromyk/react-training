import React from 'react';
import PaintingList from './components/PaintingList/PaintingList';
import paintings from './paintings.json';
import Panel from './Panel/Panel';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Notification from './components/Notification/Notification';
import Layout from './components/Layout/Layout';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
  return (
    <Layout>
      <Notification text="Привет мой свет!" type="error" />
      <Notification text="Привет мой свет!" type="success" />
      <ColorPicker options={colorPickerOptions} />
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
        {/* <a href="">Читать...</a> */}
      </Panel>
      <PaintingList paintings={paintings} />
    </Layout>
  );
};

export default App;
