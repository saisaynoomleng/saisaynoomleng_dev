import { About } from '@/components/About';
import { Hero } from '@/components/Hero';
import { Bounded } from '@saisaynoomleng_dev/ui';

export default function Home() {
  return (
    <Bounded size="full" spacing="lg">
      <Hero />
      <About id="about" />
    </Bounded>
  );
}
