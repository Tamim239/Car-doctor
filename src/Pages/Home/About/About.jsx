
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

export const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
   <div className='lg:w-1/2 relative'>
   <img src={person} alt='person' className="w-3/4 rounded-lg shadow-2xl" />
   <img src={parts} alt='person' className="w-2/4 absolute right-5 top-1/2 rounded-lg border-8  shadow-2xl" />
   </div>
    <div className='lg:w-1/2 pl-4'>
        <h3 className='text-3xl font-bold text-orange-500'>About Us</h3>
      <h1 className="text-5xl font-bold w-2/3">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <p>
      the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
      </p>
      <button className="btn btn-error">Get More Info</button>
    </div>
  </div>
</div>
  )
}
