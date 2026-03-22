import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

export const Hero = () => {
    return (
        <div className='hero container'>
            {/* <iframe
                className="hero-video"
                src="https://www.youtube.com/embed/esbYQHIhB5s?autoplay=1&mute=1&loop=1&playlist=esbYQHIhB5s&controls=0"
                frameBorder="0"
                allowFullScreen
            ></iframe> */}
            <div className="hero-text">
                <h1>We Ensure better education for a better world</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit labore ducimus iste ex facilis aut incidunt recusandae explicabo minima soluta, qui est hic voluptatibus nesciunt aliquid debitis fuga. Laborum, eius.</p>
                <button className='btn'>Explore More <img src={arrow} alt="" /></button>
            </div>
        </div>
    )
}


