import { FlexBox, Heading, Quote, Slide } from 'spectacle';

export default function MapGroupBy() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column">
        <Heading
          color="tertiary"
          fontSize="h2"
          padding="0px"
          margin="0px"
          textAlign="left"
        >
          <pre style={{ padding: 0, margin: 0 }}>
            Map.groupBy(iterables, function)
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
