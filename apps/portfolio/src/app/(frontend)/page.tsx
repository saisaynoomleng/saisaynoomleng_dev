import { About } from '@/components/About';
import { Employments } from '@/components/Employments';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Bounded } from '@saisaynoomleng_dev/ui';

export default function Home() {
  return (
    <Bounded size="full" spacing="lg">
      <Hero />
      <About id="about" />
      <Skills id="skills" />
      <Employments id="experiences" />
    </Bounded>
  );
}
