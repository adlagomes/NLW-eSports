// 1080 --> 18:00

export function convertMinutesStringToHour(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;

  return `${hours}:${minutes}`;
}