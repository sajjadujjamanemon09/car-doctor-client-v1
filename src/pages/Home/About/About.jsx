import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
<div className="hero min-h-[650px]">
  <div className="hero-content flex-col lg:flex-row">
    <div className='md:w-1/2 relative p-8'>
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts} className="absolute right-5 top-1/2 border-white border-8 w-1/2 rounded-lg shadow-2xl" />
    </div>
    <div className='md:w-1/2 p-8'>
        <h2 className='text-2xl text-red-500 font-semibold py-3'>About Us</h2>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
      <p className="py-6">The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.  </p>
      <button className="btn bg-red-500 text-white">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;