type BulletPoint = {
  text: string;
  bold?: boolean;
};

type NumberedPoint = {
  title?: string;
  description?: string;
  bullets?: string[];
};

type Section = {
  title?: string;
  description?: string;
  bulletPoints?: BulletPoint[];
  numberedPoints?: NumberedPoint[];
};

type TermsProps = {
  title: string;
  description?: string;
  sections?: Section[];
};

const Terms = ({ title, description, sections = [] }: TermsProps) => {
  return (
    <div className='space-y-4 text-sm text-textMainColor'>
      <h2 className='text-base font-bold'>{title}</h2>

      {description && (
        <p className='whitespace-pre-wrap leading-relaxed'>{description}</p>
      )}

      {sections?.map((section, index) => (
        <div key={index} className='space-y-2'>
          {section.title && <h3 className='font-bold'>{section.title}</h3>}

          {section.description && (
            <p className='mb-2 whitespace-pre-wrap leading-relaxed'>
              {section.description}
            </p>
          )}

          {section.bulletPoints && section.bulletPoints?.length > 0 && (
            <ul className='list-disc space-y-1 pl-5'>
              {section.bulletPoints.map((point, idx) => (
                <li key={idx} className='whitespace-pre-wrap'>
                  {point.bold ? (
                    <span className='font-semibold'>{point.text}</span>
                  ) : (
                    point.text
                  )}
                </li>
              ))}
            </ul>
          )}

          {section.numberedPoints && section.numberedPoints?.length > 0 && (
            <ol className='list-decimal space-y-1 pl-5'>
              {section.numberedPoints.map((point, idx) => (
                <li key={idx} className='whitespace-pre-wrap'>
                  {point.title && (
                    <span className='font-semibold'>{point.title}</span>
                  )}
                  {point.description && (
                    <p className='mt-1'>{point.description}</p>
                  )}
                  {point.bullets && point.bullets?.length > 0 && (
                    <ul className='mt-1 list-disc space-y-1 pl-5'>
                      {point.bullets.map((bullet, bidx) => (
                        <li key={bidx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          )}
        </div>
      ))}
    </div>
  );
};

export default Terms;
