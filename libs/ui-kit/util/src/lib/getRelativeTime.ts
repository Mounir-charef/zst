export function getRelativeTime(date: Date, locale = 'en-US') {
  const now = new Date();
  const diffTime = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  ); // Difference in days

  if (diffTime < 1) {
    // Less than a day
    return new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  } else if (diffTime < 7) {
    // Within a week
    return new Intl.DateTimeFormat(locale, {
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  } else {
    // More than a week
    return new Intl.DateTimeFormat(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
}
