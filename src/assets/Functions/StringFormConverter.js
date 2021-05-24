const StringFormConverter = (number) => {
  let str;
  if (number % 100 >= 10 && number % 100 <= 20) {
    str = 'фильмов'
  }
  else if (number % 10 === 1) {
    str = 'фильм'
  }
  else if (number % 10 >= 2 && number % 10 <= 4) {
    str = 'фильма'
  }
  else {
    str = 'фильмов'
  }
  return str
}
export default StringFormConverter