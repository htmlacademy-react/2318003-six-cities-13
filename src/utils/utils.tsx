import {MOUNTHS} from '../constant/constant.ts';

const humanizeDate = (date: string) => {
  const desiredDate = new Date(date);
  const desiredMonth = desiredDate.getMonth();

  return `${MOUNTHS[desiredMonth]} ${desiredDate.getFullYear()}`;
};

const getShortName = (name: string) => name.split(' ')[0];

export {humanizeDate, getShortName};
