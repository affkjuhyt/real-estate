import { useTranslations } from "next-intl";

export default function RealEstateSection() {
  const t = useTranslations('services');

  return (
    <div className="bg-[#F7F8F8]">
      <div className="mx-auto max-w-5xl py-24 sm:py-32 px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-600 sm:text-3xl mb-12">
            {t('real_estate_consultiong')}
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-pretty text-lg/7 text-gray-600">
              {t('real_estate_consultiong_content_1')}
            </p>
            <p className="text-pretty text-lg/7 text-gray-600 mt-6">
              {t('real_estate_consultiong_content_2')}
            </p>
            <p className="text-pretty text-lg/7 text-gray-600 mt-6">
              {t('real_estate_consultiong_content_3')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
