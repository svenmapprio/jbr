export const parseIntForce = (value: string | number) => {
  const parsed = parseInt(value as string);

  if (isNaN(parsed)) return null;

  return parsed;
};

export const hasValue = <T>(value: T | null | undefined): value is T =>
  typeof value !== "undefined" && value !== null;

export const replaceTextLinks = (text: string) => {
  let replacedText = text;

  const regex = new RegExp(/\[(.*?)\]\s*\((.*?)\)/gm);

  let matches: RegExpExecArray | null = null;

  while ((matches = regex.exec(text))) {
    const [matchText, label, link] = matches;

    replacedText = replacedText.replace(
      matchText,
      `<a href=${link}>${label}<a/>`
    );
  }

  return replacedText;
};
