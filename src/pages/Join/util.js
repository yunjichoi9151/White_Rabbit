// 이름 정규식
export const nameExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,20}$/;

// 이메일 정규식
export const emailExp =
  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

// 이름 정규식
export const passwordExp =
  /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

export const isValidEmail = (inputValue) => {
  return emailExp.test(inputValue);
};

export const isValidPW = (inputValue) => {
  return passwordExp.test(inputValue);
};

export const isValidUserName = (inputValue) => {
  return nameExp.test(inputValue);
};

export const getUserNameValidateMessage = (value) => {
  if (!isValidUserName(value)) {
    return '유저 이름은 두 글자 이상 20 글자 이하 입니다.';
  }

  return '';
};

export const getEmailValidateMessage = (value) => {
  if (!isValidEmail(value)) {
    return '이메일 양식이 올바르지 않습니다.';
  }

  return '';
};

export const getPasswordValidateMessage = (value) => {
  if (!isValidPW(value)) {
    return '비밀번호는 영문 소문자, 숫자, 특수문자(~!@#$^&*) 10자 이상 조합만 사용 가능합니다.';
  }

  return '';
};

export const getPasswordCheckValidateMessage = (value, params, checkKey) => {
  if (checkKey) {
    if (value !== params[checkKey]) {
      return '비밀번호와 비밀번호 재확인이 일치하지 않습니다.';
    }
  } else {
    if (value !== params.password) {
      return '비밀번호와 비밀번호 재확인이 일치하지 않습니다.';
    }
  }

  return '';
};
