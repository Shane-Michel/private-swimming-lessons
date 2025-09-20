import './VideosPage.css';
import BottomSection from '../../Components/BottomSection';

const VideosPage = () => {

  return (
    <main>

      <div className="reviews-container">
        <h1>Videos</h1>
        <div id="videos-container">

          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/professionalprivatelearning/videos/932123924777574&mute=1"
            width="300"
            height="530"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Kreal514/videos/10211548753146306&mute=1"
            width="300"
            height="530"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/1511873867/videos/pcb.10221956214403759/1318941162077501&mute=1"
            width="300"
            height="530"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/professionalprivatelearning/videos/1885181455168360&mute=1"
            width="300"
            height="530"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>

        </div>
      </div>
      <BottomSection />
    </main>
  );
};

export default VideosPage;