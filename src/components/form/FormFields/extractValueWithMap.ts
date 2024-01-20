/* eslint-disable @typescript-eslint/no-explicit-any */
const extractValueWithMap = (
  addData: any,
  valueName: string,
  labelName: string
) => {
  const result = addData?.map((item: any) => ({
    value: item[valueName],
    label: item[labelName],
  }));
  return result;
};

export default extractValueWithMap;
