import {
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

export default function ErrorCause() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="tertiary" fontSize="h2" padding="0px" margin="0px">
          <pre style={{ padding: 0, margin: 0 }}>
            {`New Error(message, {cause})`}
          </pre>
        </Heading>
        <Quote color="tertiary" fontSize="monospace" lineHeight="1.5">
          <p>
            <strong>Spec: ES2022</strong>
          </p>
          在建立 Error 物件或是繼承自 Error 的其他內建物件（例如 SyntaxError）時
          <br></br>
          可以傳入任意型別的資料給 cause 選項，提供更完整的錯誤資訊以及發生脈絡
        </Quote>
        <CodePane language="javascript">
          {`
            try {
                // 拋出第一個錯誤
                throw new Error('Initial error');
            } catch (initialError) {
                // 攔截到拋出異常後，可以依情況加上 cause option
                throw new Error('Secondary error', { cause: initialError });
            }
          `}
        </CodePane>
        <UnorderedList fontSize="monospace">
          <ListItem>
            <Link
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause"
              fontSize="monospace"
              color="secondary"
            >
              Check Documentation
            </Link>
          </ListItem>
          <ListItem>
            <Link
              target="_blank"
              href="https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.error.cause.js"
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
