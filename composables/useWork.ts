export const useWork = (id: string | number) => {
  return useFetch(`/api/work/${id}`);
};
