export function formatTimeAgo(date: Date | string): string {
  const now = new Date();
  const past = new Date(date);
  const diffMs = now.getTime() - past.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return `il y a ${seconds} seconde${seconds > 1 ? "s" : ""}`;
  if (minutes < 60) return `il y a ${minutes} minute${minutes > 1 ? "s" : ""}`;
  if (hours < 24) return `il y a ${hours} heure${hours > 1 ? "s" : ""}`;
  if (days < 30) return `il y a ${days} jour${days > 1 ? "s" : ""}`;
  if (months < 12) return `il y a ${months} mois`;
  return `il y a ${years} an${years > 1 ? "s" : ""}`;
}