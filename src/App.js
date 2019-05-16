import React, { useState, useCallback } from 'react';
import './App.css';
import { useKeyUp } from 'react-keyboard-input-hook';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleKeyUp = useCallback(
    ({ keyName }) => {
      if (keyName === 'ArrowDown') {
        if (selectedIndex === 5) {
          setSelectedIndex(0);
        } else {
          setSelectedIndex(selectedIndex + 1);
        }
      }
      if (keyName === 'ArrowUp') {
        if (selectedIndex === 0) {
          setSelectedIndex(5);
        } else {
          setSelectedIndex(selectedIndex - 1);
        }
      }
    },
    [selectedIndex]
  );

  const { keyName, keyCode, keyCodeHistory, keyNameHistory } = useKeyUp(
    handleKeyUp
  );

  const getMenuItems = () => {
    let menuItems = [];
    for (let i = 0; i < 6; i++) {
      menuItems.push(
        <span
          key={'item' + i}
          style={{ color: selectedIndex === i ? 'green' : 'white' }}
        >
          Item {i}
        </span>
      );
    }
    return menuItems;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Use up- and down arrow keys!</h1>
        <h2>Example Menu</h2>
        {getMenuItems()}
        <h3>Last pressed key code: {keyCode}</h3>
        <h3>Last pressed key name: {keyName}</h3>
        <h6>
          Key Code History: <br />
          {keyCodeHistory.map(item => item + ', ')}
        </h6>
        <h6>
          Key Name History:
          <br />
          {keyNameHistory.map(item => item + ', ')}
        </h6>
      </header>
    </div>
  );
}

export default App;
