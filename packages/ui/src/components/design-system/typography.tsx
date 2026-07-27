import { Bounded, SectionTitle } from '../shared';

const Typos = [
  { name: 'h1 heading', weight: 'regular', fontSize: '72px' },
  { name: 'h2 heading', weight: 'regular', fontSize: '60px' },
  { name: 'h3 heading', weight: 'regular', fontSize: '48px' },
  { name: 'h4 heading', weight: 'regular', fontSize: '36px' },
  { name: 'h5 heading', weight: 'regular', fontSize: '24px' },
  { name: 'body 1', weight: 'regular', fontSize: '16px' },
  { name: 'body 2', weight: 'regular', fontSize: '14px' },
];

export const Typography = (): React.JSX.Element => {
  return (
    <Bounded spacing="sm">
      <SectionTitle label="Typography" />

      <div className="grid grid-cols-2 gap-x-6">
        <div className="border p-4">
          <p className="text-fs-600">Aa</p>
          <p>JetBrains Mono</p>
        </div>

        <div className="border p-2 flex justify-end flex-col items-end">
          <p className="uppercase">abcdefghijklmnopqrstuvwxyz</p>
          <p>abcdefghijklmnopqrstuvwxyz</p>
        </div>
      </div>

      <div>
        {Typos.map((typo) => (
          <div
            key={typo.name}
            className="grid grid-cols-[1fr_auto] items-end border-b"
          >
            <p className="uppercase" style={{ fontSize: typo.fontSize }}>
              {typo.name}
            </p>

            <p className="p-2">{typo.fontSize}</p>
          </div>
        ))}
      </div>

      <SectionTitle label="icon" />
    </Bounded>
  );
};
