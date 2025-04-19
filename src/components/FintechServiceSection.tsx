import { useTranslations } from "next-intl";

export default function FintechServiceSection() {
  const t = useTranslations('services');

  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-3xl text-center mb-12">
            {t('fintech_consulting')}
          </h2>
          <p className="text-pretty text-lg/6 text-gray-600 mb-6">
            {t('fintech_consulting_content')}
          </p>
          <ul className="space-y-4 text-lg/6 text-gray-600">
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-[#c99909] mr-3"></div>
              {t('fintech_consulting_list_1')}
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-[#c99909] mr-3"></div>
              {t('fintech_consulting_list_2')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
