const DateConverter = (date) => {
  const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
  const year = date[0]
  const month = months[Number(date[1]) - 1]
  const day = Number(date[2])
  return `${day} ${month} ${year}`
}
export default DateConverter
