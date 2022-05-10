import { useEffect, useState } from 'react';

const Icon = ({ children, medium, bold }) => {
  const [classNames, setClassNames] = useState([]);

  useEffect(() => {
    const tmp = ['font-icon', 'select-none'];

    if (medium) {
      tmp.push('font-medium');
    }
    if (bold) {
      tmp.push('font-bold');
    }

    setClassNames(tmp);
  }, [medium, bold]);

  return (
    <span className={classNames.join(' ')}>
      {children}
    </span>
  );
};

export default Icon;
