import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'

export default function AboutSection({ messages }) {
  const cards = [
    {
      name: messages['home']['agile'],
      description: messages['home']['agile_content'],
      icon: PhoneIcon,
    },
    {
      name: messages['home']['experience'],
      description: messages['home']['experience_content'],
      icon: LifebuoyIcon,
    },
    {
      name: messages['home']['strategic_collaborations'],
      description: messages['home']['strategic_collaborations_content'],
      icon: NewspaperIcon,
    },
    {
      name: messages['home']['global_opportunities'],
      description: messages['home']['global_opportunities_content'],
      icon: NewspaperIcon,
    }
  ]

  return (
    <div className="relative isolate overflow-hidden bg-[#F7F8F8] py-24 sm:py-32">
      <div className="mx-auto max-w-9xl px-2 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold tracking-tight text-[#FA7F28] sm:text-3xl text-left flex items-center gap-4">
            {messages['about']['title']}
          </h2>
          <h2 className='uppercase text-3xl font-bold text-black text-center mt-4'>{messages['about']['about_title']}</h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 text-center">
            {messages['about']['about_content']}
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
