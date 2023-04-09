import React from 'react';
import { Avatar, Row, Select } from 'antd';

const { Option } = Select;

const MySelect = ({ data }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const filteredOptions = data.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log(data);
  return (
    <Select
      style={{ width: '100%' }}
      // placeholder="aaaa"
      showSearch
      // optionFilterProp="children"
      filterOption={(input, option: any) =>
        option.label.toLowerCase().includes(input.toLowerCase())
      }
      optionLabelProp="label"
      options={data}
      allowClear
      // onClear={() => setSearchValue('')}
      // onSearch={setSearchValue}
      // notFoundContent={'Không có kết quả'}
      // optionFilterProp="children"
      // filterOption={(input, option: any) => option.label.toLowerCase().includes(input.toLowerCase())}
      // onChange={(value) => console.log(value)}
    >
      {filteredOptions.map((option) => {
        return (
          <Option key={option.value} value={option.value} label={option.name}>
            <Row className={'dpl-flex align-items-center'}>
              <Avatar
                size={20}
                src={option.logo}
                shape={'circle'}
                className="bd-none-impt"
              ></Avatar>
              <span className={'mgl5 '}>{option.value}</span>
            </Row>
          </Option>
        );
      })}
    </Select>
  );
};

export default MySelect;
