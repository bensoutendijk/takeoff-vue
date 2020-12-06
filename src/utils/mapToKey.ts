export default function (arr: any[], key: string) {
  return arr.reduce((obj, item) => {
    Object.assign(obj, { [item[key]]: item });
    return obj;
  }, {});
}
