export function runAsync(
  asyncF: () => Promise<void>,
  onError: (e: any) => void
): void {
  asyncF.catch(onError);
}
