import { format, isThisYear } from "date-fns"

export const formattedDate = (date: string) => {
  const fDate = new Date(date)

  return isThisYear(fDate) ? format(fDate, "MMM d") : format(fDate, "MMM d,y")
}
