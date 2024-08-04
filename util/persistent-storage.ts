export function remove(key: string) {
  if (typeof window === "undefined") return;
  localStorage.removeItem(key);
}

export function exist(key: string) {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem(key);
}

export function count() {
  if (typeof window === "undefined") return 0;
  return localStorage.length;
}

export function clear() {
  if (typeof window === "undefined") return;
  localStorage.clear();
}

export function setString(key: string, value: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, value);
}

export function getString(key: string, defaultValue?: string) {
  if (typeof window === "undefined") return defaultValue;
  return localStorage.getItem(key) || defaultValue;
}

export function setObject<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

export function getObject<T>(key: string, defaultValue: T) {
  if (typeof window === "undefined") return defaultValue;
  try {
    const value = localStorage.getItem(key);
    if (!value) return defaultValue;
    return JSON.parse(value) as T;
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
}
