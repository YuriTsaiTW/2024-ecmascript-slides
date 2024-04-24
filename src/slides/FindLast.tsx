import {
  Box,
  CodePane,
  FlexBox,
  Heading,
  Link,
  ListItem,
  Quote,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
  UnorderedList,
} from 'spectacle';

export default function FindLast() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" color="tertiary" fontSize="h3" padding="8px">
          <pre style={{ padding: 0, margin: 0 }}>
            Array.prototype.
            <br />
            findLast(callback: Function, this: unknown)
          </pre>
        </Heading>
        <Quote color="tertiary" fontSize="monospace" lineHeight="1.5">
          ES2023
          <br />
          從陣列的結尾位置往前看，取得第一個符合 <strong>callback</strong>{' '}
          函式的執行結果的元素
        </Quote>
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
          <CodePane language="javascript">
            {`
            // Before
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            
            const lastDivisible3 = array.findLast(number => number % 3 === 0);
          `}
          </CodePane>
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}
