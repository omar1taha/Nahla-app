import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HomelaptopHero } from '../../assets/assets';
import img4 from '../../assets/airbnb.png';
import img2 from '../../assets/booking.png';
import img1 from '../../assets/google.png';
import img3 from '../../assets/verbo.png';
import './HeroSection.css';

export default function HeroSection() {
  const { t } = useTranslation();
  console.log(t);
  return (
    <section className="mb-8">
      <div className="md:flex">
        <div className="mt-5 sm:pl-0 md:pl-8 md:w-12">
          <h2 className="text-5xl text-blackBold m-0">
            {t('landing.firstHeroTitle')}
          </h2>
          <p className="min-w-8 textGray  line-height-4 text-lg text-wrap break-words py-3 mt-0 text-500">
            {t('landing.firstHeroDescription')}
          </p>
          <Link to="/" className="no-underline block w-full">
            <Button
              label={t('landing.getStarted')}
              className="p-button-secondary border-primary bg-primary text-primary px-6"
            />
          </Link>
        </div>
        <div className=" sm:hidden md:block md:w-7 ">
          <img
            className="w-full pt-5 "
            src={HomelaptopHero}
            alt="laptop picture as a hero photo"
          />
        </div>
      </div>

      <div className="cards-container">
        <div class="grid mt-8">
          <div class="sm:col-12 md:col-6 lg:col-3 sm:mb-4 md:mb-0 flex justify-content-center">
            {/* shadow-3 border-round surface-card hover:shadow-lg hover:shadow-red-200 transition-all duration-30 */}
            <img
              src={img1}
              className="w-7 h-[75px] p-image-shadow "
              alt="img1"
            />
          </div>
          <div class="sm:col-12 md:col-6 lg:col-3  sm:mb-4 md:mb-0 flex justify-content-center">
            <img
              src={img2}
              className="w-7 h-[75px]  p-image-shadow"
              alt="img2"
            />
          </div>
          <div class="sm:col-12 md:col-6 lg:col-3  sm:mb-4 md:mb-0  flex justify-content-center">
            <img
              src={img3}
              className="w-7 h-[75px]  p-image-shadow"
              alt="img3"
            />
          </div>
          <div class="sm:col-12 md:col-6 lg:col-3 sm:mb-4 md:mb-0  flex justify-content-center">
            <img
              src={img4}
              className="w-7 h-[75px]  p-image-shadow"
              alt="img4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
