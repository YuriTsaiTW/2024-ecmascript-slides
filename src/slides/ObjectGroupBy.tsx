import { FlexBox, Heading, Quote, Slide } from 'spectacle';

export default function ObjectGroupBy() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="tertiary" fontSize="h2">
          <pre style={{ padding: 0, margin: 0 }}>
            Object.groupBy(iterables, function)
          </pre>
        </Heading>
        <Quote color="tertiary" fontSize="monospace" lineHeight="1.5">
          <p>
            <strong>Spec: ES2024</strong>
          </p>
        </Quote>
      </FlexBox>
    </Slide>
  );
}
