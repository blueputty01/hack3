import { useState } from 'react';
import Upload from './Upload';
import api from './api';

export default function Process() {
  const [result, setResult] = useState('');
  const a = new api();
  const responseHandler = async (data: FormData) => {
    const response = await a.getSalinity(data);
    setResult(response.data);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Upload responseHandler={responseHandler}></Upload>
      <div>{result}</div>
    </div>
  );
}
