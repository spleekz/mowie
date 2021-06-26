import { CurrentMovieStore } from '../CurrentMovieStore'
import { MovieListStore } from '../MovieListStore'
import { ThemeStore } from '../ThemeStore'

export class RootStore {
  CurrentMovieStore = new CurrentMovieStore()
  MovieListStore = new MovieListStore()
  ThemeStore = new ThemeStore()
}
