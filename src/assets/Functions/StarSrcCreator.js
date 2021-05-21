import CurrentMovieStore from "../../store/CurrentMovieStore";
import ThemeStore from "../../store/ThemeStore";
import yellowStarWhiteBorder from '../images/yellow-star-white-border.svg'
import yellowStarBlackBorder from '../images/yellow-star-black-border.svg'
import greyStarWhiteBorder from '../images/grey-star-white-border.svg'
import greyStarBlackBorder from '../images/grey-star-black-border.svg'
import whiteBorderStar from '../images/white-border-star.svg'
import blackBorderStar from '../images/black-border-star.svg'

const StarSrcCreator = (star) => {
  let starSrc;
  if (star.isSelected) {
    if (ThemeStore.isDarkTheme) {
      starSrc = yellowStarWhiteBorder
    }
    else {
      starSrc = yellowStarBlackBorder
    }
    if (star.onHover) {
      CurrentMovieStore.clearHoveredStars(star.id)
    }
  }
  if (!star.isSelected) {
    if (ThemeStore.isDarkTheme) {
      if (star.onHover) {
        starSrc = greyStarWhiteBorder
      }
      else {
        starSrc = whiteBorderStar
      }
    }
    else {
      if (star.onHover) {
        starSrc = greyStarBlackBorder
      }
      else {
        starSrc = blackBorderStar
      }
    }
  }
  return starSrc
}
export default StarSrcCreator