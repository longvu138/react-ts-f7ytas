import React from 'react';
import MySelect from './SelectComponent.tsx';

const options = [
  { label: 'Báo gấm', value: 'option1' },
  { label: 'Gao Đỏ', value: 'option2' },
  { label: 'Thanh La', value: 'option3' },
];

const App = () => {
  return (
    <div>
      <MySelect data={options} />
    </div>
  );
};

export default App;
