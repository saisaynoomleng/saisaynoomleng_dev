import { About } from '@/components/About';
import { Bounded } from '@saisaynoomleng_dev/ui';

export default function Home() {
  return (
    <Bounded size="full" spacing="md">
      Welcome
      <About />
    </Bounded>
  );
}
