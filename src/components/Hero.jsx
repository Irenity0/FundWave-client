import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div>
  <div className="hero-content flex-col gap-10 md:flex-row">
    <img
      src="https://i.pinimg.com/236x/7b/be/9e/7bbe9ecb7463c4537a96c4965b7b45f6.jpg"
      className="max-w-xs rounded-lg shadow-2xl" />
    <div>
      <h1 className="md:text-4xl text-3xl font-bold text-primary">
        Begin Your Journey Through Verdant Horizons!
      </h1>
      <p className="py-6 text-accent">
        Dive into a serene world of growth and discovery. Let nature inspire your learning as you cultivate knowledge with every step. Explore paths filled with challenges and rewards tailored to your journey.
      </p>
      <button className="btn border-2 border-secondary text-secondary">
        <Link to={"/lessons"}>Begin Your Exploration</Link>
      </button>
    </div>
  </div>
</div>

    );
};

export default Hero;
