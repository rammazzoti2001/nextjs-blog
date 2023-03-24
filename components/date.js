import { format, parseISO } from "date-fns"

const Date = ({ dateString }) => {
  const date = parseISO(dateString)
  const dateFormatted = format(date, 'LLLL d, yyyy')

  return (
    <time date={dateString}>{dateFormatted}</time>
  )
}

export default Date
