// utils/streak.js

export const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.getTime();
};

export const getYesterday = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);
  return yesterday.getTime();
};

// Call this when user completes their habits today
export function updateStreak() {
  const today = getToday();
  const yesterday = getYesterday();

  const streakData = JSON.parse(localStorage.getItem('streakData')) || {
    streakCount: 0,
    lastCompletedDate: 0,
  };

  if (streakData.lastCompletedDate === today) {
    // Already updated streak today, no change
    return streakData.streakCount;
  }

  if (streakData.lastCompletedDate === yesterday) {
    // Consecutive day, increment streak
    streakData.streakCount += 1;
  } else {
    // Missed day or first time, reset streak
    streakData.streakCount = 1;
  }

  streakData.lastCompletedDate = today;
  localStorage.setItem('streakData', JSON.stringify(streakData));
  return streakData.streakCount;
}

export function getStreak() {
  const streakData = JSON.parse(localStorage.getItem('streakData'));
  return streakData ? streakData.streakCount : 0;
}
