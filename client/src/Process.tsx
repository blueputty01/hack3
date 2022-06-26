import { useState } from 'react';
import Upload from './Upload';

export default function Process() {
  const [res, setRes] = useState('');
  const responseHandler = (data: FormData) => {};
  return (
    <div>
      <Upload responseHandler={responseHandler}></Upload>
      <div>{res}</div>
    </div>
  );
}
