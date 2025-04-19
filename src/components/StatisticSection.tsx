export default function StatisticSection() {
  const imagePaths = [
    '/statistic/Statistic1.jpeg',
    '/statistic/Statistic2.jpeg',
    '/statistic/Statistic3.jpeg',
    '/statistic/Statistic4.jpeg',
    '/statistic/Statistic5.jpeg',
    '/statistic/Statistic6.jpeg',
  ];

  const titles = [
    'San Luis Obisbo Market Report',
    'Ventura Market Report',
    'San Diego Market Report',
    'Los Angeles County Market Report',
    'Los Angeles Westside Market Report',
    'Orange County Market Report',
  ];

  return (
    <div className="p-4 bg-white">
      <h2 className="text-2xl text-black font-bold text-center mb-6">Market Reports</h2> {/* Added section title */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {imagePaths.map((path, index) => (
          <div key={index} className="aspect-square overflow-hidden bg-gray-200 relative group border border-gray-300">
            <img src={path} alt={titles[index]} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-black text-lg font-semibold shadow-md">{titles[index]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}