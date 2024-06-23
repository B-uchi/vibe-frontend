import heroImage from "../public/1.jpg"

const HeroSection = () => {
  return (
    <div className="h-[100vh] w-full" style={{backgroundImage: `url(${heroImage})`}}>HeroSection</div>
  )
}

export default HeroSection