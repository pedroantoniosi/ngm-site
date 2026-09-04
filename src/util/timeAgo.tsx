export function timeAgo(date: string) {
  const now = new Date();
  const past = new Date(date);

  const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (seconds < 60) {
    return "há poucos segundos";
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `há ${minutes} ${minutes === 1 ? "minuto" : "minutos"}`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `há ${hours} ${hours === 1 ? "hora" : "horas"}`;
  }

  const days = Math.floor(hours / 24);

  if (days < 30) {
    return `há ${days} ${days === 1 ? "dia" : "dias"}`;
  }

  const months = Math.floor(days / 30);

  if (months < 12) {
    return `há ${months} ${months === 1 ? "mês" : "meses"}`;
  }

  const years = Math.floor(months / 12);

  return `há ${years} ${years === 1 ? "ano" : "anos"}`;
}
