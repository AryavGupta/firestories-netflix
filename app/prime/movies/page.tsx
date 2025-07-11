import { Suspense } from "react"
import type { Metadata } from "next"
import ContentRow from "../components/home/ContentRow"
import FeaturedBanner from "../components/home/FeaturedBanner"
import LoadingSkeleton from "../components/ui/LoadingSkeleton"
import {recentlyAdded, popularMovies} from "../lib/data/mockData"
import type { FeaturedContent } from "../lib/types/index"
import type { ContentItem } from "../lib/types/index"

export const metadata: Metadata = {
  title: "Movies - Stream Latest Films",
  description: "Discover the latest movies, blockbusters, and award-winning films on PrimeClone",
}

// Movie-specific content
const featuredMovie: FeaturedContent = {
  id: "featured-movie-1",
  title: "THE TOMORROW WAR",
  description:
    "A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past. Starring Chris Pratt in this action-packed sci-fi thriller that will keep you on the edge of your seat.",
  backgroundImage: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/The+tomorrow+war.png",
  episodeInfo: "AVAILABLE NOW",
  newEpisodeInfo: "New on Prime",
  imdbRating: "6.5",
  year: 2021,
  rating: "PG-13",
  duration: "2h 18m",
}

const actionMovies: ContentItem[] = [
  {
    id: "action-1",
    title: "Reacher",
    thumbnail: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/reacher.jpg",
    badge: "TOP 10",
    isPrime: true,
    year: 2021,
    duration: "1h 32m",
    rating: "7.4",
    genre: "Action",
  },
  {
    id: "action-2",
    title: "The Boys",
    thumbnail: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/the+boys.avif",
    isPrime: true,
    year: 2016,
    duration: "2h 8m",
    rating: "7.3",
    genre: "Action",
  },
  {
    id: "action-3",
    title: "Mission Impossible 4",
    thumbnail: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/MI+4.jpg",
    badge: "TOP 10",
    isPrime: true,
    year: 2014,
    duration: "1h 41m",
    rating: "7.4",
    genre: "Action",
  },
  {
    id: "action-4",
    title: "Sound of Metal",
    thumbnail: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/sound+of+metal.jpg",
    isPrime: true,
    year: 2015,
    duration: "2h 0m",
    rating: "8.1",
    genre: "Action",
  },
  {
    id: "action-5",
    title: "Fallout",
    thumbnail: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/fallout.webp",
    isPrime: true,
    year: 2017,
    duration: "1h 55m",
    rating: "6.7",
    genre: "Action",
  },
]

const comedyMovies: ContentItem[] = [
  {
    id: "comedy-1",
    title: "Coming 2 America",
    thumbnail: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/coming+2+america.jpeg",
    badge: "NEW",
    isPrime: true,
    year: 2021,
    duration: "1h 50m",
    rating: "5.3",
    genre: "Comedy",
  },
  {
    id: "comedy-2",
    title: "The Final Destination",
    thumbnail: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/Final+Destination+4.jpg",
    isPrime: true,
    year: 2014,
    duration: "1h 39m",
    rating: "8.1",
    genre: "Comedy",
  },
  {
    id: "comedy-3",
    title: "The Power",
    thumbnail: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/the+power.webp",
    badge: "TOP 10",
    isPrime: true,
    year: 2019,
    duration: "2h 10m",
    rating: "7.9",
    genre: "Comedy",
  },
  {
    id: "comedy-4",
    title: "Traitors",
    thumbnail: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/the+traitors.jpg",
    isPrime: true,
    year: 2020,
    duration: "1h 30m",
    rating: "7.4",
    genre: "Comedy",
  },
  {
    id: "comedy-5",
    title: "Citadel",
    thumbnail: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/citadel.jpeg",
    isPrime: true,
    year: 2016,
    duration: "1h 56m",
    rating: "7.4",
    genre: "Comedy",
  },
]

const dramaMovies: ContentItem[] = [
  {
    id: "drama-1",
    title: "Being The Ricardos",
    thumbnail: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/being+the+ricardos.jpg",
    isPrime: true,
    year: 2016,
    duration: "2h 17m",
    rating: "7.8",
    genre: "Drama",
  },
  {
    id: "drama-2",
    title: "Final Destination 2",
    thumbnail: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/Final+Destination+2.jpg",
    badge: "AWARD WINNER",
    isPrime: true,
    year: 2021,
    duration: "2h 8m",
    rating: "6.8",
    genre: "Drama",
  },
  {
    id: "drama-3",
    title: "Final Destination 4",
    thumbnail: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/Final+Destination+4.jpg",
    badge: "AWARD WINNER",
    isPrime: true,
    year: 2020,
    duration: "2h 0m",
    rating: "7.7",
    genre: "Drama",
  },
  {
    id: "drama-4",
    title: "The bear",
    thumbnail: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/the+bear.jpeg",
    isPrime: true,
    year: 2016,
    duration: "1h 51m",
    rating: "7.4",
    genre: "Drama",
  },
  {
    id: "drama-5",
    title: "The Tomorrow War",
    thumbnail: "https://firestories.s3.ap-south-1.amazonaws.com/prime-images/The+tomorrow+war.png",
    isPrime: true,
    year: 2017,
    duration: "1h 34m",
    rating: "7.4",
    genre: "Drama",
  },
]

export default function MoviesPage() {
  return (
    <div className="pt-20 page-transition">
      <Suspense fallback={<LoadingSkeleton type="hero" />}>
        <FeaturedBanner content={featuredMovie} />
      </Suspense>

      <div className="py-12 space-y-12">
        <Suspense fallback={<LoadingSkeleton type="row" />}>
          <ContentRow title="Popular Movies" items={popularMovies} seeMoreLink="#" />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton type="row" />}>
          <ContentRow title="Action & Adventure" items={actionMovies} seeMoreLink="#" />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton type="row" />}>
          <ContentRow title="Comedy Movies" items={comedyMovies} seeMoreLink="#" />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton type="row" />}>
          <ContentRow title="Award-Winning Dramas" items={dramaMovies} seeMoreLink="#" />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton type="row" />}>
          <ContentRow title="Recently Added Movies" items={recentlyAdded} seeMoreLink="#" />
        </Suspense>
      </div>
    </div>
  )
}
