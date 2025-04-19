export default function Stats({ messages }: any) {
  const stats = [
    {
      id: 1,
      prefix: messages["loan_programs"]["over"],
      value: messages["loan_programs"]["over_value"],
      suffix: messages["loan_programs"]["over_suffix"],
    },
    {
      id: 2,
      prefix: messages["loan_programs"]["more_than"],
      value: messages["loan_programs"]["more_than_value"],
      suffix: messages["loan_programs"]["more_than_suffix"],
    },
  ];

  return (
    <div
      className="relative bg-gray-900 py-24 sm:py-32 bg-cover bg-center bg-no-repeat h-[500px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('https://cdn-ilckcdj.nitrocdn.com/TlIJsbnDwfWSFAxSCYVlsZWWrjCseoFY/assets/images/optimized/rev-d40bbbb/altocapital.com/wp-content/uploads/2025/03/Banner-Web-Cambio.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <dl className="max-w-md space-y-12 lg:ml-24 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-y-1">
              <span className="text-2xl font-normal text-white sm:text-3xl">
                {stat.prefix}
              </span>
              <span className="text-4xl font-bold text-[#c99909] sm:text-6xl">
                {stat.value}
              </span>
              <span className="text-2xl font-normal text-white sm:text-3xl mt-1">
                {stat.suffix}
              </span>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
