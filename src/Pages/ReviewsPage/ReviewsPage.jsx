import BottomSection from '../../Components/BottomSection';
import Picture from '../../Components/Picture';
import './ReviewsPage.css';
import { reviewImages } from '../../imageSources';

const reviews = [
  {
    image: reviewImages.nicoleWalton,
    comment:
      "Mrs. Christin Mitchell had my baby swimming in the 9 ft on her first lesson and treading water in her second lesson. Book her yall, you’ll be swimming in one day! #MadisonCountyGA #SwimmingLessons #BookChristin #ImNext",
    author: 'Nicole Walton',
  },
  {
    image: reviewImages.gailRucker,
    comment:
      "So I did a thing this weekend. 9ft baby, it's never to old to learn. Thank you Christin Mitchell best swim instructor around. And thanks to my cheerleaders.😊",
    author: 'Gail Rucker',
  },
  {
    image: reviewImages.raquelJohnson,
    comment:
      "Many thanks to Christin Mitchell for the outstanding time and patience she took in helping Carly swim. This little girl loved  to be in the pool with her floaties on now she don't have to wear floaties no more! Friends I'm telling y'all she's the BEST swim instructor around. So proud of Carly",
    author: 'Raquel Johnson',
  },
  {
    image: reviewImages.boonieJohnson,
    comment:
      "Proud mom moment 🥹🥹  neither one of them knew a thing about swimming and here we are!  Thank you so much Christin Mitchell for taking time with my kids and teaching them an important life skill that they now love !🥰",
    author: 'Boonie Johnson',
  },
  {
    image: reviewImages.kimberlyBurden,
    comment:
      "What an awesome weekend! Did something I've bn scared of my whole life. I trusted myself in the water and I learned to swim. Cause hunni this was hard for me. And honestly It was not bad. We were never taught to swim as kids. Both my children know how to swim. I had to get over this fear. ..Now I'm still not gonna go jump into no deep deep water but, hey I will atleast enjoy the activity involving water. S/O to my girl Christin Mitchell..the most patient instructor in the world. Book her for ur leasons...Oh and I swam in the 9ft and jumped off the diving board into the 9ft..I'll be 42yrsold in a few weeks and I'm no longer putting limits on myself.Trying new things, knowing down boundaries, and enjoying myl life...And I was up at 5:20am and cooked dinner for my mom and family...I'm winning all the way around.",
    author: 'Kimberly Burden',
  },
  {
    image: reviewImages.neNeFeaster,
    comment:
      "When I tell you Christin Mitchell took away fears my child had with water touching her face even in the bath tub . She got my girl diving in 9 ft & swimming like a fish in 2 days . I highly recommend her !!! Thank you so much see you in September !! I'm one proud mama.",
    author: 'Ne-Ne Feaster',
  },
  {
    image: reviewImages.jenStowers,
    comment:
      "She's Simply the Best!!! Christin Mitchell!!!! Swimming in 2 days...Really she had me in 9 ft water on the first day!! If you are wanting to learn how to swim...overcome any fears of the waters...You need to contact her!!!#swimlessons #pooltime #swimming",
    author: 'JenJen Stowers',
  },
  {
    image: reviewImages.adeline,
    comment:
      "Y'all, I could cry!! Adeline started these lessons off nervous and scared due to a previous lesson with someone else and now look at her go!! I can't recommend Christin Mitchell enough!!! She helped my girl conquer her fear and so much more!! Thank you so much, Christin! Way to go, Adeline! We are so so proud of you!",
    author: 'Sara Black',
  },
  {
    image: reviewImages.jojo,
    comment:
      "Jojo was determined that he was going to learn how to swim before he went back to school and he did Just That!!! Thank you Christin!! You're the GOAT!! Your patience and time was everything!",
    author: 'Tammy Jones',
  },
  {
    image: reviewImages.ridge,
    comment: "Look at Ridge now compared to last year! What a huge difference!!",
    author: 'Amy Younger',
  },
  {
    image: reviewImages.lauder,
    comment:
      "I am so proud of this sweet boy of mine, he was very afraid of the deep end and swimming in general and Christin Mitchell worked her magic!  Highly recommend her for anyone needing private lessons!!!",
    author: 'Heather Lauder',
  },
  {
    image: reviewImages.cecil,
    comment:
      "I have many phobias, but this one conquered hits different!! My family is a water family. How have I managed not being able to swim this long? Christin Mitchell has changed this for me! I completed my lessons and I'm not scared anymore. Christin was kind, patient, and very educational.",
    author: 'Cecil Shiflet',
  },
  {
    image: reviewImages.mapp,
    comment:
      "I really did a thing this weekend, learning to swim! All of this was made possible with no other than this phenomenal instructor, christin Mitchell.  Thank you so much!",
    author: 'Franshundra Mapp',
  },
  {
    image: reviewImages.foster,
    comment:
      "I can't thank Christin Wood Mitchell enough for making these two safe in the water!! If your little ones need swimming lessons, Christin is your girl. They can now swim above and under the water, float, dive and we are water park ready. She gives them so much knowledge.",
    author: 'Chanda Foster',
  },
  // Add more reviews as needed
];

const ReviewsPage = () => {

  return (
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
  );
};

export default ReviewsPage;