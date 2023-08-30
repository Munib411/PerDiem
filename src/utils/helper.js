import moment from 'moment';

export function getGreeting(currentTime) {
  const morningStart = moment('04:00:00', 'HH:mm:ss');
  const morningEnd = moment('12:00:00', 'HH:mm:ss');
  const afternoonStart = moment('12:00:00', 'HH:mm:ss');
  const afternoonEnd = moment('16:00:00', 'HH:mm:ss');
  if (currentTime.isBetween(morningStart, morningEnd)) {
    return 'Good Morning';
  } else if (currentTime.isBetween(afternoonStart, afternoonEnd)) {
    return 'Good Afternoon';
  } else {
    return 'Good Night';
  }
}
