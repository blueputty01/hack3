import { useState } from 'react';
import Upload from './Upload';
import api from './api';

export default function Process() {
  const a = new api();
  const [res, setRes] = useState('');
  const responseHandler = async (data: FormData) => {
    const r = await a.getSalinity(data);
    setRes(r);
  };
  return (
    <div>
      <Upload responseHandler={responseHandler}></Upload>
      <div>{res}</div>
    </div>
  );
}
