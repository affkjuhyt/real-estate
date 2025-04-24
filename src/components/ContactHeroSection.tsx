export default function ContactHeroSection({ messages }: any) {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-3xl text-center mb-12 mt-12">
            {messages['contact']['title']}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-pretty text-lg/7 text-gray-600 text-center">
              {messages['contact']['content']}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
