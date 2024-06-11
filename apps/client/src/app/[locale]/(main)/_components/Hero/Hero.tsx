import Section from '../Section';
import { categoriesLinks } from '../../../../../config';
import { Link } from '../../../../../navigation';
import HeroSearch from './HeroSearch';
import HeroText from './HeroText';
import ShowCaseBackground from './ShowCaseBackground';

const Hero = () => {
  return (
    <Section className="h-[calc(100dvh_-_7.75rem_-1px)]">
      <div className="flex h-[65vh] w-full flex-col items-center overflow-hidden rounded-3xl bg-black px-10 text-base text-white md:flex-row">
        <div className="flex h-full flex-col justify-center gap-6 p-16 py-24 text-start">
          <HeroText />
          <HeroSearch />
        </div>
        <ShowCaseBackground />
      </div>

      {/* category links icons */}
      <div className="flex items-center justify-between gap-1 px-2">
        {categoriesLinks.map((item) => {
          const params = new URLSearchParams(item.params).toString();
          return (
            <Link
              className="flex flex-col items-center gap-0.5"
              key={item.label}
              href={`/?${params}`}
              target="_blank"
            >
              {item.icon}
              <span className="text-xs capitalize">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

export default Hero;
