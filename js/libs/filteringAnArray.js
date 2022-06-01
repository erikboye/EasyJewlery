export const filteringAnArray = (array, filterString) => {
  return array.filter((arrayElement) => {
    return arrayElement.Title.toLowerCase().includes(
      filterString.toLowerCase(),
    );
  });
};
