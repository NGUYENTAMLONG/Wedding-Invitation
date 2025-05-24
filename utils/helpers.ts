import { toast } from 'react-toastify';
// import { apiGetBalance } from '@/store/deposit/api';

export const getCookie = (cname: string | undefined) => {
  if (!cname) {
    return;
  }
  if (typeof document !== 'undefined') {
    const name = cname + '';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length + 1, c.length);
      }
    }
  }
  return '';
};

export const getLocalStore = (cname: string | undefined) => {
  if (!cname) {
    return;
  }
  if (typeof localStorage !== 'undefined') {
    const dataLocal =
      localStorage.getItem(cname) && (localStorage.getItem(cname) ?? '');
    return dataLocal;
  }
};

/**
 * Set cookie
 **/
export const saveCookie = (cookieData: {
  name: string | undefined,
  value: string,
  exdays: number,
}): void => {
  if (!cookieData?.name) {
    return;
  }
  const date = new Date();
  date.setTime(date.getTime() + cookieData.exdays * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieData.name}=${
    cookieData.value
  }; expires=${date.toUTCString()}`;
};

export const saveLocalStore = (localData: {
  name: string | undefined,
  value: string,
}): void => {
  if (!localData?.name) {
    return;
  }
  localStorage.setItem(localData?.name, localData?.value);
};

export const delLocalStore = (name: string): void => {
  localStorage.removeItem(name);
};

/**
 * Del Cookie by name
 **/
export const delCookie = (name: string | undefined) => {
  if (!name) {
    return;
  }
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

/**
 * Check Empty data
 **/
export const isEmpty = (value: any): boolean => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};
export const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const formatPrice = (value: number) => {
  return value ? value.toLocaleString('en-US') : '0';
};

export function formatNumber(number: number) {
  if (number >= 1e6 && number < 1e9) return +(number / 1e6).toFixed(1) + 'M';
  if (number >= 1e9 && number < 1e12) return +(number / 1e9).toFixed(1) + 'B';
  if (number >= 1e12) return +(number / 1e12).toFixed(1) + 'T';
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);
}

export const formatNumberWithDecimal = (value: any, toFixed: number) => {
  if (!value) {
    return '0';
  }
  value = value * Math.pow(10, toFixed);
  value = Number(value.toFixed(0));
  value = value / Math.pow(10, toFixed);
  if (toFixed) {
    value = Number(value).toFixed(toFixed) + '';
  }
  value = value.toString();
  const x = value.split('.');
  let x1 = x[0];

  let x2 = '';
  if (x.length > 1 && x[1]) {
    x2 = x[1];
    if (toFixed && x2.length > toFixed) {
      x2 = x2.substring(0, toFixed);
    }

    if (x2.length > 0) {
      let temp = '';
      let exist = false;
      for (let index = x2.length - 1; index >= 0; index--) {
        const value = Number(x2[index]);
        if (exist == false && value == 0) continue;
        exist = true;
        temp = value + temp;
      }
      x2 = temp;
    }
    if (x2) x2 = `.${x2}`;
  }
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
};

export function formatNumberK(number: number | undefined) {
  if (!number) {
    return 0;
  }
  if (number >= 1e3 && number < 1e6) return +(number / 1e3).toFixed(1) + 'K';
  if (number >= 1e6 && number < 1e9) return +(number / 1e6).toFixed(1) + 'M';
  if (number >= 1e9 && number < 1e12) return +(number / 1e9).toFixed(1) + 'B';
  if (number >= 1e12) return +(number / 1e12).toFixed(1) + 'T';
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);
}

// added functions for wallet login
export const numberFormatter = (n: number) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K';
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
};

const composeReduce =
  (f: any, g: any) =>
  async (...args: any[]) =>
    f(await g(...args));
export const compose = (...fns: Function[]) => fns.reduce(composeReduce);

export const subAddress = (address: string) => {
  const before = address.substring(0, 6);
  const after = address.substring(address.length - 4);
  return `${before}...${after}`;
};

export const shortenText = (
  text: string | undefined | null,
  maxLength = 12,
) => {
  if (!text) return '';
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

export const formatWalletAddress = (
  address: string | undefined,
  toFixedIndex?: number,
) => {
  if (!address) return '';
  if (!toFixedIndex) toFixedIndex = 5;
  if (address.length <= toFixedIndex * 2) {
    return address;
  }
  return ''.concat(
    address.slice(0, toFixedIndex),
    '...',
    address.slice(-toFixedIndex),
  );
};

export function convertToSlug(text: string) {
  text = text.toLowerCase().trim(); // Chuyển đổi thành chữ thường và loại bỏ khoảng trắng đầu và cuối chuỗi
  text = text.replace(/[^\w\s-]/g, ''); // Loại bỏ các ký tự không phải chữ cái, số, khoảng trắng hoặc dấu gạch ngang
  text = text.replace(/\s+/g, '-'); // Thay thế các khoảng trắng liên tiếp bằng một dấu gạch ngang
  return text;
}

export function getDaysRemaining(tsTo: number | string): number {
  const now = new Date();
  const to = new Date(tsTo);
  const diffInSeconds = (to.getTime() - now.getTime()) / 1000;

  const secondsInDay = 86400; // 24 * 60 * 60
  const daysRemaining = diffInSeconds / secondsInDay;

  if (daysRemaining > 1) {
    return Math.floor(daysRemaining);
  } else if (daysRemaining > 0 && daysRemaining < 1) {
    return daysRemaining;
  }

  return 0;
}

export const validateField = (formatMessage: string, params: any) => {
  let validateMessage = formatMessage;
  for (const keyParam in params) {
    validateMessage = validateMessage.replaceAll(
      `:${keyParam}`,
      params[keyParam],
    );
  }
  return validateMessage;
};

export const handleCopy = async (string: string, callback?: () => void) => {
  const textArea = document.createElement('textarea');
  const lang = [
    {
      code: 'en',
      value: 'Copied successfully',
    },
    {
      code: 'ja',
      value: 'コピーしました',
    },
  ];
  textArea.value = string;
  document.body.appendChild(textArea);
  textArea.select();
  const langSelected = getLocalStore('NEXT_LOCALE');
  const findLang = lang.find((vl) => vl.code == langSelected);
  try {
    document.execCommand('copy');
    if (findLang) {
      toast.success(findLang.value, {
        className: 'font-base text-base leading-base text-white tracking-10',
        autoClose: 1000,
      });
    }
    if (callback) callback();
  } catch (err) {
    console.error('Unable to copy text: ', err);
  }
  document.body.removeChild(textArea);
};

// export const fetchUserBalance = async (
//   isOwner: boolean | null,
// ): Promise<{
//   amount_ada: number,
//   amount_get: number,
//   decimals_get: any,
// } | null> => {
//   const profile = JSON.parse(getLocalStore('profile') ?? '');
//   let obj = {};
//   if (isOwner) {
//     obj = { owner: isOwner };
//   }
//   const res = await apiGetBalance(profile?.walletId, obj);
//   if (res) {
//     const lovelaceBalance = res?.lovelace ? Number(res.lovelace) / 1000000 : 0;
//     const tokenData = res?.tokens || {};
//     const getTokenData = res?.tokens?.find(
//       (token: { unit: string }) =>
//         token?.unit === GET_ADDRESS[NETWORK_SELECTED],
//     );
//     const getTokenQuantity = getTokenData?.quantity || 0;
//     const getTokenDecimals = getTokenData?.decimals || 0;

//     const data = {
//       amount_ada: lovelaceBalance,
//       amount_get: getTokenQuantity / 10 ** getTokenDecimals,
//       decimals_get: getTokenDecimals,
//     };
//     return data;
//   }
//   return null;
// };

export async function sleep(delayInMs: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, delayInMs);
  });
}
