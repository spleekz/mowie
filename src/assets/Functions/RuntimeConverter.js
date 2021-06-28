const RuntimeConverter = (runtime) => {
  const hours = Math.floor(runtime / 60)
  const minutes = runtime - 60 * hours
  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
}
export default RuntimeConverter
