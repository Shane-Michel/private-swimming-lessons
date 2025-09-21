
import BottomSection from '../../Components/BottomSection'
import './ReviewsPage.css'

const reviews = [
  {
    image: {
      webp: '/generated/nicole-walton.webp',
      fallback: '/images/nicole-walton.jpg',
    },

import BottomSection from '../../Components/BottomSection';
import Picture from '../../Components/Picture';
import './ReviewsPage.css';
import { reviewImages } from '../../imageSources';

const reviews = [
  {
    image: reviewImages.nicoleWalton,

    comment:
      "Christin had my baby swimming in the 9 ft on her first lesson and treading water in her second lesson. Book her y’all, you’ll be swimming in one day! #MadisonCountyGA #SwimmingLessons #BookChristin #ImNext",
    author: 'Nicole Walton',
  },
  {

    image: {
      webp: '/generated/gail-rucker.webp',
      fallback: '/images/gail-rucker.png',
    },

    image: reviewImages.gailRucker,

    comment:
      'So I did a thing this weekend. 9ft baby, it’s never too old to learn. Thank you Christin Mitchell best swim instructor around. And thanks to my cheerleaders. 😊',
    author: 'Gail Rucker',
  },
  {

    image: {
      webp: '/generated/raquel-johnson.webp',
      fallback: '/images/raquel-johnson.png',
    },

    image: reviewImages.raquelJohnson,

    comment:
      "Many thanks to Christin Mitchell for the outstanding time and patience she took in helping Carly swim. This little girl loved to be in the pool with her floaties on—now she doesn’t have to wear floaties anymore! Friends I'm telling y'all she's the BEST swim instructor around. So proud of Carly.",
    author: 'Raquel Johnson',
  },
  {

    image: {
      webp: '/generated/boonie-johnson.webp',
      fallback: '/images/boonie-johnson.jpg',
    },

    image: reviewImages.boonieJohnson,

    comment:
      "Proud mom moment! Neither one of them knew a thing about swimming and here we are. Thank you so much Christin Mitchell for taking time with my kids and teaching them an important life skill that they now love!",
    author: 'Boonie Johnson',
  },
  {

    image: {
      webp: '/generated/boonie-johnson.webp',
      fallback: '/images/boonie-johnson.jpg',
    },

    image: reviewImages.kimberlyBurden,

    comment:
      "What an awesome weekend! I trusted myself in the water and learned to swim. Christin Mitchell has changed this for me—kind, patient, and so educational. I'm no longer putting limits on myself.",
    author: 'Kimberly Burden',
  },
  {

    image: {
      webp: '/generated/feaster.webp',
      fallback: '/images/feaster.jpg',
    },

    image: reviewImages.neNeFeaster,

    comment:
      "When I tell you Christin Mitchell took away fears my child had with water touching her face even in the bathtub… She got my girl diving in 9 ft & swimming like a fish in 2 days. I highly recommend her!",
    author: 'Ne-Ne Feaster',
  },
  {

    image: {
      webp: '/generated/jen-stowers.webp',
      fallback: '/images/jen-stowers.jpg',
    },

    image: reviewImages.jenStowers,

    comment:
      "She's simply the best! Christin had me in 9 ft water on the first day. If you want to learn how to swim or overcome fears of the water, contact her!",
    author: 'JenJen Stowers',
  },
  {

    image: {
      webp: '/generated/adeline.webp',
      fallback: '/images/adeline.jpg',
    },

    image: reviewImages.adeline,

    comment:
      "Adeline started nervous and scared due to a previous lesson with someone else and now look at her go! Christin helped my girl conquer her fear and so much more. We can't recommend her enough!",
    author: 'Sara Black',
  },
  {

    image: {
      webp: '/generated/jojo.webp',
      fallback: '/images/jojo.png',
    },

    image: reviewImages.jojo,

    comment:
      "Jojo was determined that he was going to learn how to swim before he went back to school and he did just that! Thank you Christin—your patience and time were everything!",
    author: 'Tammy Jones',
  },
  {

    image: {
      webp: '/generated/ridge.webp',
      fallback: '/images/ridge.png',
    },
    comment: 'Look at Ridge now compared to last year! What a huge difference!!',
    author: 'Amy Younger',
  },
  {
    image: {
      webp: '/generated/lauder.webp',
      fallback: '/images/lauder.png',
    },

    image: reviewImages.ridge,
    comment: "Look at Ridge now compared to last year! What a huge difference!!",
    author: 'Amy Younger',
  },
  {
    image: reviewImages.lauder,

    comment:
      "I am so proud of this sweet boy of mine. He was very afraid of the deep end and swimming in general and Christin Mitchell worked her magic! Highly recommend her for anyone needing private lessons!",
    author: 'Heather Lauder',
  },
  {

    image: {
      webp: '/generated/cecil.webp',
      fallback: '/images/cecil.png',
    },

    image: reviewImages.cecil,

    comment:
      "I have many phobias, but this one conquered hits different! My family is a water family. Christin Mitchell has changed this for me—I completed my lessons and I'm not scared anymore.",
    author: 'Cecil Shiflet',
  },
  {

    image: {
      webp: '/generated/mapp.webp',
      fallback: '/images/mapp.png',
    },

    image: reviewImages.mapp,

    comment:
      "I really did a thing this weekend—learning to swim! All of this was made possible with this phenomenal instructor, Christin Mitchell. Thank you so much!",
    author: 'Franshundra Mapp',
  },
  {

    image: {
      webp: '/generated/foster.webp',
      fallback: '/images/foster.png',
    },

    image: reviewImages.foster,

    comment:
      "I can't thank Christin Wood Mitchell enough for making these two safe in the water! They can now swim above and under the water, float, dive, and we are water park ready. She gives them so much knowledge.",
    author: 'Chanda Foster',
  },
]

const ReviewsPage = () => {
  return (

    <main className='reviews-page'>
      <div className='reviews-container'>
        <header className='reviews-header'>
          <span className='tagline'>Stories of success</span>
          <h1>Reviews from swimmers &amp; families</h1>
          <p>Every transformation starts with a single lesson. Explore how swimmers of every age broke through fear with Christin.</p>
        </header>
        <div className='reviews-grid'>
          {reviews.map(({ image, comment, author }) => (
            <article className='review-card card' key={author + comment.slice(0, 10)}>
              <div className='review-media'>
                <picture>
                  <source srcSet={image.webp} type='image/webp' />
                  <img src={image.fallback} alt={`Review by ${author}`} loading='lazy' />
                </picture>
              </div>
              <p className='review-comment'>“{comment}”</p>
              <span className='review-author'>— {author}</span>
            </article>

    <main>
      <div className="reviews-container">
        <h1>Reviews</h1>
        <div id="reviews-container">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              {review.image && (
                <Picture
                  sources={review.image}
                  alt={`Review by ${review.author}`}
                  imgProps={{ loading: 'lazy' }}
                />
              )}
              <p>{review.comment}</p>
              <span>— {review.author}</span>
            </div>

          ))}
        </div>
      </div>

      <BottomSection />
    </main>
  )
}

export default ReviewsPage
