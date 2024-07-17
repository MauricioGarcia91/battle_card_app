export const generateUrlSearchParams = (
  initialSearchParams: Record<string, string>
) => {
  const params = Object.keys(initialSearchParams).reduce<
    Record<string, string>
  >((searchParams, param) => {
    if (initialSearchParams[param] !== undefined) {
      return {
        ...searchParams,
        [param]: initialSearchParams[param] as string
      };
    }
    return searchParams;
  }, {});

  const urlSearchParams = new URLSearchParams(params);

  return urlSearchParams;
};
