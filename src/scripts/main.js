'use strict';

// import { setCatalog } from './catalog';
import CryptoJS from 'crypto-js';
import myCrypto from 'crypto';

// setCatalog();

const encryptUserPassword = (email, password) => {
  const algo = CryptoJS.algo.SHA256.create();

  algo.update(password, 'utf-8');
  algo.update(CryptoJS.SHA256(email.toLowerCase()), 'utf-8');

  return algo.finalize().toString(CryptoJS.enc.Base64);
};

const digestMessage = async (email, password) => {
  const msgUint8_1 = new TextEncoder().encode(password);

  const hashBuf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(email.toLowerCase()));

  const msgUint8_2 = new Uint8Array(hashBuf);

  const msgUint8 = concat([msgUint8_1, msgUint8_2]);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const str = btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));

  return str;
}

const encryptSmt = (email, password) => {
  const hash = myCrypto.createHash('sha256');

  hash.update(password, 'utf8');
  hash.update(email.toLowerCase(), 'utf8');

  return hash.digest('base64');
};

const user = {
  email: 'a.rad4enko+1599655877182@gmail.com',
  password: '123',
}

console.log('1: ', encryptUserPassword(user.email, user.password));

digestMessage(user.email, user.password)
  .then((s) => console.log('2: ', s));


function concat(arrays) {
  if (!arrays.length) return null;
debugger
  let totalLength = arrays.reduce((acc, value) => acc + value.length, 0);

  let result = new Uint8Array(totalLength);

  let offset = 0;
  for(let array of arrays) {
    result.set(array, offset);
    offset += array.length;
  }

  return result;
}