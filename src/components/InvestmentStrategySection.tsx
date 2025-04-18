import { useTranslations } from "next-intl";

export default function InvestmentStrategySection() {
  const t = useTranslations('services');

  return (
    <div className="bg-[#F7F8F8]">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-3xl text-center mb-12">
            {t('investment_strategy')}
          </h2>
          <p className="text-pretty text-lg/6 text-gray-600 mb-6">
            {t('investment_content')}
          </p>
          <p className="text-pretty text-lg/6 text-gray-600 mb-4">{t('investment_start')}</p>
          <ul className="space-y-4 text-lg/6 text-gray-600 mb-6">
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-[#FA7F28] mr-3"></div>
              {t('investment_list_1')}
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-[#FA7F28] mr-3"></div>
              {t('investment_list_2')}
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-[#FA7F28] mr-3"></div>
              {t('investment_list_3')}
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-[#FA7F28] mr-3"></div>
              {t('investment_list_4')}
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-[#FA7F28] mr-3"></div>
              {t('investment_list_5')}
            </li>
          </ul>
          <p className="text-pretty text-lg/6 text-gray-600">
            {t('investment_consult')}
          </p>
        </div>
      </div>
    </div>
  );
}
