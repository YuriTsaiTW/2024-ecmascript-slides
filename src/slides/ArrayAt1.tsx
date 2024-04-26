import { FlexBox, Heading, Link, Quote, Slide } from 'spectacle';

export default function ArrayAt1() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="tertiary" fontSize="h2">
          WHY <pre style={{ padding: 0, margin: 0 }}>indexable.at(index)</pre>
        </Heading>
        <Quote
          color="tertiary"
          fontSize="text"
          lineHeight="1.5"
          style={{
            width: '60%',
          }}
          width="60%"
        >
          <p>
            The <strong>[]</strong> syntax is not specific to Arrays and
            Strings; it applies to all objects. Referring to a value by index,
            like <strong>arr[1]</strong>, actually just refers to the property
            of the object with the key <strong>"1"</strong>, which is something
            that any object can have.{' '}
          </p>
          <p>
            So <strong>arr[-1]</strong> already "works" in today's code, but it
            returns the value of the <strong>"-1"</strong> property of the
            object, rather than returning an index counting back from the end.
          </p>
        </Quote>
        <Link
          target="_blank"
          href="https://github.com/tc39/proposal-relative-indexing-method?tab=readme-ov-file#rationale"
          fontSize="monospace"
          color="secondary"
          marginTop="16px"
        >
          https://github.com/tc39/proposal-relative-indexing-method?tab=readme-ov-file#rationale
        </Link>
      </FlexBox>
    </Slide>
  );
}
