import { CodePane, FlexBox, Heading, Slide } from 'spectacle';

export default function ObjectGroupBy1() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="tertiary" fontSize="h2" padding="0px">
          <pre style={{ padding: 0, margin: 0 }}>
            {`<Object|Map>`}.groupBy<br></br>(iterables, function)
          </pre>
        </Heading>
        <FlexBox style={{ gap: 16 }} flexDirection="column" alignItems="start">
          <CodePane language="javascript" style={{ width: '100%' }}>
            {`
          // Before 
          function groupBy(array, keySelector) {
              const group = {};
              for (const element of array) {
                  const key = keySelector(element);
                  if (!group[key]) {
                      group[key] = [];
                  }
                  group[key].push(element);
              }
              return group;
          }

          const groupedByAge = groupBy(users, user => user.gentle);
        `}
          </CodePane>
          <CodePane language="javascript">
            {`
        // After
        const groupedByAge = Object.groupBy(users, user => user.gentle);
        `}
          </CodePane>
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}
