import { useTranslations } from 'next-intl';

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

import TemplateBase from '../components/layout/TemplateBase';
import Container from '../components/layout/Container';
import Demands from '../components/pages/index/demands';
import NewsletterCTA from '../components/NewsletterCTA';

function ReadMore() {
  const t = useTranslations('pages.Index');

  return (
    <div className="w-full pt-10">
      <div className="w-full mx-auto rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-primary-900 bg-primary-100 rounded-lg hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75">
                <span>{t('readMore')}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-primary-500`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pb-2 text-gray-500">
                <div>
                  {t.rich('content.text', {
                    p: (children) => <p className="mt-4">{children}</p>,
                    bold: (children) => <span className="font-medium text-primary-500">{children}</span>
                  })}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}


export default function Home() {
  const t = useTranslations('pages.Index');

  return (
    <TemplateBase>
      <div className="relative z-0 flex items-center justify-center h-screen mb-12 overflow-hidden -mt-[96px] sm:-mt-[104px]">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          >
            {/*w-full h-full object-cover*/}
            <source
              src="https://res.cloudinary.com/dw042ee9y/video/upload/v1644236955/Strasbourg%20Summit/Video-Homepage-Summit_yzrbqd.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute z-20 inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-center sm:text-5xl lg:text-6xl">
            {t('itIsTime')}
          </h1>

          <p className="mt-6 text-xl text-white max-w-prose m-auto sm:text-center sm:text-2xl lg:text-3xl">
            {t('description')}
          </p>
        </div>
      </div>

      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-xl text-gray-500">
            {t.rich('content.lead', {
              p: (children) => <p className="mt-4">{children}</p>,
              bold: (children) => <span className="font-medium text-primary-500">{children}</span>
            })}
          </div>

          <ReadMore />
        </div>

        <Demands />

        <NewsletterCTA />
      </Container>
    </TemplateBase>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      messages: (await import(`../i18n/${locale}.json`)).default
    }
  };
}
