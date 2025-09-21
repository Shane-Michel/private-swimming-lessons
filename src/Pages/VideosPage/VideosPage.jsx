import BottomSection from '../../Components/BottomSection'
import './VideosPage.css'

const videos = [
  'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/professionalprivatelearning/videos/932123924777574&mute=1',
  'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Kreal514/videos/10211548753146306&mute=1',
  'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/1511873867/videos/pcb.10221956214403759/1318941162077501&mute=1',
  'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/professionalprivatelearning/videos/1885181455168360&mute=1',
]

const VideosPage = () => {
  return (
    <main className='videos-page'>
      <div className='videos-container'>
        <header className='videos-header'>
          <span className='tagline'>See the progress</span>
          <h1>Video highlights from recent lessons</h1>
          <p>Watch real swimmers conquering fears, building skills, and celebrating breakthroughs with Christin.</p>
        </header>

        <div className='videos-grid'>
          {videos.map((src) => (
            <div className='video-card card' key={src}>
              <iframe
                src={src}
                width='320'
                height='540'
                style={{ border: 'none', overflow: 'hidden', borderRadius: '18px' }}
                scrolling='no'
                frameBorder='0'
                allow='autoplay; clipboard-write; encrypted-media; picture-in-picture'
                allowFullScreen
                loading='lazy'
                title={src}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
      <BottomSection />
    </main>
  )
}

export default VideosPage
