import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'

const cards = [
  {
    name: 'Agile and Dedicated Service',
    description: 'Quick response to your pre-approval request (within 24 hours), accompanied by personalized guidance and continuous follow-up.',
    icon: PhoneIcon,
  },
  {
    name: 'Experience',
    description: 'Over 15 years of accumulated experience in the industry, ensuring clear and informed management.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Strategic Collaborations',
    description: 'We collaborate with the most trusted title and appraisal companies, guaranteeing a smooth and secure process.',
    icon: NewspaperIcon,
  },
  {
    name: 'Global Opportunities',
    description: 'We provide loans to investors from all over the world.',
    icon: NewspaperIcon,
  }
]

export default function AboutSection() {
  return (
    <div className="relative isolate overflow-hidden bg-[#F7F8F8] py-24 sm:py-32">
      <div className="mx-auto max-w-9xl px-2 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold tracking-tight text-[#FA7F28] sm:text-3xl text-left flex items-center gap-4">
            <span className="h-[2px] w-12 bg-[#FA7F28] inline-block"></span>
            ABOUT US
          </h2>
          <h2 className='uppercase text-3xl font-bold text-black text-center mt-4'>Accelerate Your Real Estate Investments with Alto Capital, Your Premier Private Money Lender in the USA</h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 text-center">
            Based in Miami with over 15 years of combined experience in real estate investment loans, <span className="text-gray-700 font-semibold">Alto Capital</span> provides loans to seasoned real estate investors and developers seeking to bypass the complexities of traditional banks and secure smoother financing. From bridge loans, fixed and reversible loans, ground-up construction loans, to DSCR loans, <span className="text-gray-700 font-semibold">Alto Capital</span> stands out as a reliable and secure partner for your next investment.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white p-6 ring-1 ring-inset ring-white hover:bg-white/10 transition-colors duration-200">
              <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-[#FA7F28]" />
              <div className="text-base/7">
                <h3 className="font-semibold text-black uppercase">{card.name}</h3>
                <p className="mt-2 text-gray-500">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
