const features = [
  {
    name: "Mission",
    description:
      "Our goal is to be the preferred and trusted partner for both US and international real estate investors, while valuing the importance of our employees and borrowers. We aim to offer seamless and expedited financing solutions that lead to profitable investments.",
  },
  {
    name: "Vision",
    description:
      "We strive to provide real estate investors with a quicker and more seamless loan experience, maximizing their profits and ensuring peace of mind, all while staying true to our core values of integrity, collaboration, and excellence.",
  },
];

export default function MissionAndVisionSection() {
  return (
    <div className="bg-[#F7F8F8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-start text-left"
              >
                <dt className="flex items-center gap-4 text-[#FA7F28] text-2xl font-semibold">
                  <div className="h-[2px] w-8 bg-[#FA7F28]"></div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-lg text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
