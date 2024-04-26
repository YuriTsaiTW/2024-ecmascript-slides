import {
  CodePane,
  FlexBox,
  Heading,
  Link,
  ListItem,
  Quote,
  Slide,
  UnorderedList,
} from 'spectacle';

export default function FindLast() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column">
        <Heading color="tertiary" fontSize="h2" padding="0px" margin="0px">
          <pre style={{ padding: 0, margin: 0 }}>
            Array.prototype.
            <br />
            findLast(function, this)
          </pre>
        </Heading>
        <Quote color="tertiary" fontSize="monospace" lineHeight="1.5">
          <p>
            <strong>Spec: ES2023</strong>
          </p>
          從陣列的結尾位置往前看，取得第一個符合 <strong>function</strong>{' '}
          函式的執行結果的元素
        </Quote>
        <FlexBox>
          <FlexBox
            justifyContent="spaceBetween"
            flexDirection="column"
            flexBasis="1"
            style={{ gap: 16 }}
          >
            <CodePane language="javascript">
              {`
            // Before
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            
            // [...]: unnecessary copy
            // reverse: unnecessary mutation
            const lastDivisible3 = [...array].reverse().find(number => number % 3 === 0);
          `}
            </CodePane>
            <CodePane language="javascript" style={{ width: '100%' }} highlightRanges={[4]}>
              {`
            // After
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            
            const lastDivisible3 = array.findLast(number => number % 3 === 0);
          `}
            </CodePane>
          </FlexBox>
          <UnorderedList fontSize="monospace" color="quinary">
            <ListItem>
              <Link
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast"
                fontSize="monospace"
                color="secondary"
              >
                Check Documentation
              </Link>
            </ListItem>
            <ListItem>
              <Link
                target="_blank"
                href="https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.array.find-last.js"
                fontSize="monospace"
                color="secondary"
              >
                Check Polyfill/Transformer
              </Link>
            </ListItem>
            <ListItem>
              <Link
                target="_blank"
                href="https://jsperf.app/nagehu"
                fontSize="monospace"
                color="secondary"
              >
                Check Performance
              </Link>
            </ListItem>
          </UnorderedList>
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}
