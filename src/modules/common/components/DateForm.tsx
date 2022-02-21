import React from 'react';
import { BsCalendarCheck } from 'react-icons/bs';

interface Props {
  placeholder: string;
}

const DateForm = (props: Props) => {
  const [isType, setType] = React.useState('text');
  const [display, setDisplay] = React.useState(true);
  const { placeholder } = props;

  const onFocus = () => {
    setType('date');
    setDisplay(false);
  };

  const onBlur = () => {
    setType('text');
    setDisplay(true);
  };
  return (
    <>
      <input type={isType} className="date-input" onFocus={onFocus} onBlur={onBlur} placeholder={placeholder} />
      <BsCalendarCheck className={display ? 'date-input-icon' : 'displayNone'} onClick={onFocus} />
    </>
  );
};

export default DateForm;
