import HeroSection from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <div>
      <div className="">

        <HeroSection />
        <h1>Innovative Software Solutions for your Business Needs</h1>

        <h2>Our mission is to empower businesses and solve their tech problems.</h2>

        <button>Explore Services</button>
      </div>

      <div>
        <h2>Services</h2>

        <ul>
          <li>Websites</li>
          <li>Mobile App</li>
          <li>Desktop Apps</li>
          <li>Custom Software</li>
          <li>Design</li>
        </ul>
      </div>

      <div>
        <h2>Why VERJ?</h2>
      </div>

      <div>
        <h2>Our Work</h2>

        <div>Halal Restos</div>

        <div>Jewlry App</div>

        <div>Virtual TA</div>

        <div>trakart</div>
      </div>

      <div>
        <h2>Contact</h2>
      </div>
    </div>
  );
}
