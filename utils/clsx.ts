export const merge = (...args: string[]) => {
  return args.filter(Boolean).join(" ");
};
