import { formattedDate } from "../src/utils"

interface Streak {
  currentCount: number
  startDate: string
  lastLoginDate: string
}
// used when storing in localStorage
const KEY = 'streak'

export function streakCounter(storage: Storage, date: Date): Streak {
  const streak = {
    currentCount: 1,
    startDate: formattedDate(date),
    lastLoginDate: formattedDate(date),
  }

  // store on localStorage
  storage.setItem(KEY, JSON.stringify(streak))

  return streak
}