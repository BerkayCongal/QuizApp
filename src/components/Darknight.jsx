import React from 'react';
import { Switch } from 'antd';
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const Darknight = () => <Switch defaultChecked onChange={onChange} />;
export default Darknight;
