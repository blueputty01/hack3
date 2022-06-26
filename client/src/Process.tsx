import { useState } from 'react';
import Upload from './Upload';
import api from './api';

export default function Process() {
  const a = new api();
  const [result, setResult] = useState('');
  const responseHandler = async (data: FormData) => {
    const response = await a.getSalinity(data);
    setResult(response.data);
  };
  return (
    <div>
      <Upload responseHandler={responseHandler}></Upload>
      <div>{result}</div>
    </div>
  );
}
