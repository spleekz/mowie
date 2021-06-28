const RatingStyleCreator = (vote) => {
  let ratingStyle
  if (vote <= 3) {
    ratingStyle = { backgroundColor: '#727272' }
  } else if (vote <= 5) {
    ratingStyle = { backgroundColor: '#85855d' }
  } else if (vote <= 7) {
    ratingStyle = { backgroundColor: '#91a449' }
  } else if (vote <= 8) {
    ratingStyle = { backgroundColor: '#89c939' }
  } else {
    ratingStyle = { backgroundColor: '#32ba43' }
  }
  return ratingStyle
}
export default RatingStyleCreator
