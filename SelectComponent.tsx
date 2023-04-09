import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const MySelect = ({ data }) => {
  const [searchValue, setSearchValue] = React.useState('');
  const filteredOptions = data.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Select
      showSearch
      onSearch={setSearchValue}
      filterOption={false}
      notFoundContent={'Không có kết quả'}
    >
      {filteredOptions.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default MySelect;
