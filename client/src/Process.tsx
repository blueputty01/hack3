import { useState } from 'react';
import Upload from './Upload';
import api from './api';
import './Process.scss';

export default function Process() {
  const [result, setResult] = useState('');
  const a = new api();
  const responseHandler = async (data: FormData) => {
    setResult('loading');
    const response = await a.getSalinity(data);
    setResult(response.data);
  };

  const int = parseInt(result);
  const width = (int / 9) * 100 + '%';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        rowGap: '1rem',
        alignItems: 'center',
      }}
    >
      <Upload responseHandler={responseHandler}></Upload>
      <div className="result">
        {result === '' ? (
          'Please upload an image to view salinity'
        ) : result === 'loading' ? (
          'Processing...'
        ) : (
          <div>
            <div>{int} / 9</div>
            <div className="barContainer">
              <div className="bar" style={{ width: width }}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
