import { useTranslations } from "next-intl";

export default function AboutUsSection() {
  const t = useTranslations('about');

  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-3xl text-center mb-12">
            {t('title')} – Sapience Capital
          </h2>
          <p className="text-pretty text-lg/6 text-gray-600 mb-6">
            {t('first_content')}
          </p>
          <p className="text-pretty text-lg/6 text-gray-600 mb-6">
            {t('second_content')}
          </p>
          <p className="text-pretty text-lg/6 text-gray-600">
            {t('third_content')}
          </p>
        </div>
      </div>
    </div>
  );
}
