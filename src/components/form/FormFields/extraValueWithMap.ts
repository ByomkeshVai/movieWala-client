/* eslint-disable @typescript-eslint/no-explicit-any */
const extractValueWithMap = (addData: any) => {
  const result = addData?.map((item: any) => ({
    value: item.category,
    label: item.category,
  }));
  return result;
};

export default extractValueWithMap;
