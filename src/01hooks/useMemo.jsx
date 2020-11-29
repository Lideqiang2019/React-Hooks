import React, { useMemo, useState, useCallback } from 'react';
// import { button } from 'antd-mobile';

export default function UseMemo() {
  const [target, setTarget] = useState(0);
  const [other, setOther] = useState(0)

  const sum = useMemo(() => {
    console.log('重新计算一次');
    let _sum = 0;
    for (let i = 1; i <= target; i++) {
      _sum += i;
    }
    return _sum;
  }, [target]);

  const inputChange = useCallback((e) => {
    console.log(e.target.value);
  }, []);

  return (
    <div style={{ width: '200px', margin: 'auto' }}>
      <input type="text" onChange={inputChange} />
      <div style={{ width: '80px', margin: '100px auto', fontSize: '40px' }}>{target} {sum}</div>
      <button onClick={() => setTarget(target + 1)}>递增</button>
      <button onClick={() => setTarget(target - 1)}>递减</button>

      <div style={{ width: '80px', margin: '100px auto', fontSize: '20px' }}>干扰项 {other}</div>
      <button onClick={() => setOther(other + 1)}>递增</button>
      <button onClick={() => setOther(other - 1)}>递减</button>
    </div>
  )
}