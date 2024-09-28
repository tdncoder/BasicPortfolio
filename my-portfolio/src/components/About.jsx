import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="Code and me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sed ut,
            iusto distinctio explicabo adipisci totam quasi repudiandae
            obcaecati qui non, officiis, delectus modi cupiditate aperiam in
            praesentium blanditiis placeat.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
