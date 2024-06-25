import React, { useState } from 'react';
import styles from "../css/My.module.css";

export default function ForeignLanguageTestRadio() {

  const data = [
    { id: 0, title: '통과기준1' },
    { id: 1, title: '통과기준2' },
    { id: 2, title: '통과기준3' },
    { id: 3, title: '통과기준4' },
    { id: 4, title: '통과기준5' },
    { id: 5, title: '해당 없음' }
  ];

  const [checkedItems, setCheckedItems] = useState([]);

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckedItems(prev => [...prev, id]);
    }
    else {
      setCheckedItems(checkedItems.filter((el) => el !== id));
    }
  };

  return (
    <div className={styles.checkList2}>
      {data?.map((data, key) => (
        <div key={key}>
          <label>
            <input type='radio' name={'select-${data.id}'}
              onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
              checked={checkedItems.includes(data.id) ? true : false} />
          </label>
          <span>{data.title}</span>
        </div>
      ))}
    </div>

  );
}