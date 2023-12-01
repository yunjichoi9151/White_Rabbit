import { useEffect, useState } from 'react';

const useInfoMessage = (defaultInfoMessage) => {
  const [infoMessages, setInfoMessages] = useState(defaultInfoMessage);
  const [isAllPass, setIsAllPass] = useState(false);
  const infoMessagesKeys = Object.keys(defaultInfoMessage);

  const onChangeInfoMessage = (value, name, params) => {
    const message =
      value.length === 0
        ? ''
        : defaultInfoMessage[name].validate(value, params);
    const isValidate = message === '' && value.length !== 0 ? true : false;

    setInfoMessages({
      ...infoMessages,
      [name]: {
        ...infoMessages[name],
        status: isValidate ? 'success' : 'error',
        children: message,
      },
    });
  };

  useEffect(() => {
    const statusArray = infoMessagesKeys.map((key) => {
      return infoMessages[key].status === 'success';
    });

    setIsAllPass(statusArray.every((status) => status === true));
  }, [infoMessages]);
  return { infoMessages, setInfoMessages, onChangeInfoMessage, isAllPass };
};

export default useInfoMessage;
