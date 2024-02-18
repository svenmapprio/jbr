export const parseIntForce = (value: string | number) => {
  const parsed = parseInt(value as string);

  if (isNaN(parsed)) return null;

  return parsed;
};

export const hasValue = <T>(value: T | null | undefined): value is T =>
  typeof value !== "undefined" && value !== null;
