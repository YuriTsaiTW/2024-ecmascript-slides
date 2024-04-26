import {
  Box,
  CodePane,
  CodeSpan,
  FlexBox,
  Heading,
  Quote,
  Slide,
} from 'spectacle';

export default function PromiseWithResolvers() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="tertiary" fontSize="h2" padding="0px" margin="0px">
          <pre style={{ padding: 0, margin: 0 }}>Promise.withResolvers()</pre>
        </Heading>
        <Quote color="tertiary" fontSize="monospace" lineHeight="1.5">
          <p>
            <strong>Spec: ES2024</strong>
          </p>
          Promise 的靜態方法。將 promise 物件、 resolve 函式跟 reject
          的函式參考回傳在一個物件中
        </Quote>
        <Heading color="tertiary" fontSize="text" margin="0px">
          e.g. 建立 socket 請求
        </Heading>
        <CodePane
          language="javascript"
          highlightRanges={[
            [2, 3],
            [6, 9],
          ]}
        >
          {`
          // Before
          let resolve;
          let reject;
          function request(type, message) {
            if (socket) {
              const promise = new Promise((_resolve, _reject) => {
                resolve = _resolve;
                reject = _reject;
              });
              socket.emit(type, message);
              return promise;
            }
          }
          socket.on('response', (response) => resolve(response));
          socket.on('error', (err) => reject(err));
          `}
        </CodePane>
      </FlexBox>
    </Slide>
  );
}
