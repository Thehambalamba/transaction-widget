import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function generateRandomTimestamp(maxHoursAgo = 24): string {
  const now = dayjs();
  const randomMinutes = Math.floor(Math.random() * maxHoursAgo * 60);
  const timestamp = now.subtract(randomMinutes, "minute");
  return timestamp.toISOString();
}

export function formatRelativeTime(timestamp: string): string {
  return dayjs(timestamp).fromNow();
}
