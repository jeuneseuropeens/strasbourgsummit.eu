import {useTranslations} from 'next-intl'

import {Disclosure} from '@headlessui/react'
import {ChevronUpIcon} from '@heroicons/react/solid'

import TemplateBase from '../components/layout/TemplateBase'
import Container from '../components/layout/Container'
import Demands from '../components/index/demands'
import NewsletterCTA from '../components/NewsletterCTA'
import {richTextConfig} from '../lib/constants'

function ReadMore() {
  const t = useTranslations('pages.Index')

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
                  {t.rich('content.text', richTextConfig)}
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
  const t = useTranslations('pages.Index')

  const basePath = 'https://www.strasbourgsummit.eu'
  const staticImage = `${basePath}/MarchForEuropeRome-156.jpg`

  return (
    <TemplateBase>
      <div className="relative z-0 flex items-center justify-center h-home-full mb-12 overflow-hidden">
        <div className="absolute inset-0 sm:overflow-hidden sm:blur-sm sm:inset-4 sm:rounded-3xl">
          <img
            className="w-full h-full object-cover"
            src={staticImage}
            alt=""
          />

          <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" aria-hidden="true" />
        </div>

        <div className="hidden sm:block absolute inset-0 sm:overflow-hidden sm:blur-sm sm:inset-4 sm:rounded-3xl">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            poster={staticImage}
          >
            <source
              src="https://res.cloudinary.com/doz7pow8n/video/upload/q_auto:low/v1644421076/Video-Homepage-Summit-compressed-NoSound_lucwuc.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
        </div>

        <div className="relative max-w-7xl mx-auto mt-16 py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-white sm:text-center sm:text-5xl lg:text-6xl">
            {t('itIsTime1')}{' '}
            <br className="hidden sm:inline"/>
            <span className="font-bold sm:text-6xl">{t('itIsTime2')}</span>
          </h1>

          <p className="mt-6 text-xl text-white max-w-prose m-auto sm:text-center sm:text-2xl lg:text-3xl">
            {t('description')}
          </p>
        </div>
      </div>

      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-xl text-gray-500">
            {t.rich('content.lead', richTextConfig)}
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
  }
}
