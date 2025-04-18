import Link from "next/link";

export default function LoanProgramsSection({ messages}: any) {
  const loanPrograms = [
    {
      title: messages['loan_programs']['fix_flip_title'],
      term: messages['loan_programs']['short_term'],
      description: messages['loan_programs']['fix_flip_content'],
      link: "/fix-flip"
    },
    {
      title: messages['loan_programs']['ground_up_construction_title'],
      term: messages['loan_programs']['short_term'],
      description: messages['loan_programs']['ground_up_construction_content'],
      link: "/ground-up-construction"
    },
    {
      title: messages['loan_programs']['bride_title'],
      term: messages['loan_programs']['short_term'],
      description: messages['loan_programs']['bride_content'],
      link: "/bridge-loan"
    },
    {
      title: messages['loan_programs']['dscr_title'],
      term: messages['loan_programs']['short_term'],
      description: messages['loan_programs']['dscr_content'],
      link: "/dscr"
    },
    {
      title: messages['loan_programs']['dscr_foreign_title'],
      description: messages['loan_programs']['dscr_foreign_content'],
      link: "/dscr-foreign"
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[2px] bg-[#FA7F28] w-8"></div>
          <h1 className="text-[#FA7F28] text-2xl sm:text-2xl font-bold">{messages['loan_programs']['main_title']}</h1>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {/* Top row with 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {loanPrograms.slice(0, 3).map((program, index) => (
              <div key={index} className="border border-gray-200 p-8 sm:p-10 flex flex-col rounded-lg items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <h2 className="mt-4 text-xl font-semibold uppercase sm:text-2xl text-black">{program.title}</h2>
                <h3 className="text-sm text-[#FA7F28] uppercase font-medium sm:text-base">{program.term}</h3>
                <h3 className="text-sm text-gray-600 mb-6 sm:text-base">{program.description}</h3>
                <Link 
                  href={program.link} 
                  className="mt-auto bg-[#FA7F28] text-white font-medium text-sm py-2 px-4 rounded hover:bg-[#e06a15] transition-colors"
                >
                  {messages['loan_programs']['read_more']}
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom row with 2 centered items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
            {loanPrograms.slice(3).map((program, index) => (
              <div key={index} className="border border-gray-200 p-6 sm:p-10 flex flex-col rounded-lg items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <h2 className="mt-4 text-xl font-semibold uppercase sm:text-2xl text-black">{program.title}</h2>
                <h3 className="text-sm text-gray-600 mb-6 sm:text-base">{program.description}</h3>
                <Link 
                  href={program.link} 
                  className="mt-auto bg-[#FA7F28] text-white font-medium text-sm py-2 px-4 rounded hover:bg-[#e06a15] transition-colors"
                >
                  {messages['loan_programs']['read_more']}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
