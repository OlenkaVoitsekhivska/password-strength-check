export const patterns = {
  strong: /^(?=.+[A-Za-z])(?=.+\d)(?=.+[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gi,
  medium_alphNum: /^(?=.+[A-Za-z])(?=.+\d)[A-Za-z\d]{8,}$/gi,
  medium_alphaSymb: /^(?=.+[A-Za-z])(?=.+[@$!%*#?&])[A-Za-z@$!%*#?&]{8,}$/gi,
  medium_numSymb: /^(?=.+\d)(?=.+[@$!%*#?&])[\d@$!%*#?&]{8,}$/gi,
  easy_alph: /^[A-Za-z]{8,}$/gi,
  easy_num: /^[0-9]{8,}$/gi,
  easy_symb: /^[@$!%*#?&]{8,}$/gi,
};
