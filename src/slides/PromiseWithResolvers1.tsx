import {
  Box,
  CodePane,
  CodeSpan,
  FlexBox,
  Heading,
  Link,
  ListItem,
  Quote,
  Slide,
  UnorderedList,
} from 'spectacle';

export default function PromiseWithResolvers1() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="tertiary" fontSize="h2">
          <pre style={{ padding: 0, margin: 0 }}>Promise.withResolvers()</pre>
        </Heading>
        <CodePane language="javascript" highlightRanges={[2]}>
          {`
          // After
          const { promise, resolve, reject } = Promise.withResolvers();
          function request(type, message) {
            if (socket) {
              socket.emit(type, message);
              return promise;
            }
          }
          socket.on('response', (response) => resolve(response));
          socket.on('error', (err) => reject(err));
          `}
        </CodePane>
        <UnorderedList fontSize="monospace">
          <ListItem color="tertiary">✅ 避免多餘的變數定義</ListItem>
          <ListItem color="tertiary">🔺 注意可呼叫到的範圍與時機</ListItem>
          <ListItem>
            <Link
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers"
              fontSize="monospace"
              color="secondary"
            >
              Check Documentation
            </Link>
          </ListItem>
          <ListItem>
            <Link
              target="_blank"
              href="https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.promise.with-resolvers.js"
              fontSize="monospace"
              color="secondary"
            >
              Check Polyfill/Transformer
            </Link>
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
  );
}
