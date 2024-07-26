export default function sleep(delay: number = 500): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
