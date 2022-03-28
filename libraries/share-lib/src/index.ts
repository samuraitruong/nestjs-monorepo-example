export function log(message: string) {
  console.log(message);
  return { hello: new Date() };
}

export function round(a: number) {
  return Math.floor(a);
}
