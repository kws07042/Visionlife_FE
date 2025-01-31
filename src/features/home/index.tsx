import imageSrc from "/img/home/p2.jpg";
import SectionLayout from "../../layout/SectionLayout.tsx";

const Home = () => {
  return (
      <>
        <main className="w-full h-full">
          {/* 메인 이미지 */}
          <SectionLayout>
            <figure className="relative w-full h-full">
              <img className="w-full h-full object-cover" src={imageSrc} alt="Vision Image" />
              <figcaption className="absolute inset-0 flex flex-col justify-center items-center text-white text-4xl font-bold bg-black/50">
                Vision !! <br /> Dreams Come True !!
              </figcaption>
            </figure>
          </SectionLayout>

          {/* About */}
          <SectionLayout>About</SectionLayout>

          {/* Vision */}
          <SectionLayout>Vision</SectionLayout>

          {/* News */}
          <SectionLayout>News</SectionLayout>

          {/* Contact Us */}
          <SectionLayout>Contact Us</SectionLayout>
        </main>
      </>
  );
};

export default Home;