export const SetLocalStore = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    return localStorage.setItem(key, value);
  }
};
export const GetLocalStore = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
};
