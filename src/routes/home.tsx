import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Web site for translation"
        content="Translate a web site 3 languages ."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
