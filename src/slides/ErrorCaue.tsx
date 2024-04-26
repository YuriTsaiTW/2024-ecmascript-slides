import { FlexBox, Heading, Quote, Slide } from 'spectacle';

export default function ErrorCause() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="tertiary" fontSize="h2" padding="0px" margin="0px">
          <pre style={{ padding: 0, margin: 0 }}>Error Cause</pre>
        </Heading>
        <Quote color="tertiary" fontSize="monospace" lineHeight="1.5">
          <p>
            <strong>Spec: ES2022</strong>
          </p>
          以索引取得陣列中的元素/字串中的字元
        </Quote>
      </FlexBox>
    </Slide>
  );
}
