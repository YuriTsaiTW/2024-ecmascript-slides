import { Box, CodePane, FlexBox, Heading, Quote, Slide } from 'spectacle';

export default function ChangeArrayByCopy() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column">
        <Heading color="tertiary" fontSize="h2" padding="0px" margin="0px">
          Change Array by COPY
        </Heading>
        <Quote color="tertiary" fontSize="monospace" lineHeight="1.5">
          <p>
            <strong>Spec: ES2023</strong>
          </p>
          ES5
          中有些操作陣列的方法會改變對象本身。針對這些操作提供對應的實體方法，而不需變動原本的陣列
          <br />
          <mark style={{ backgroundColor: '#ebe5da', padding: 4, margin: 4 }}>
            #immutable
          </mark>
          <mark style={{ backgroundColor: '#ebe5da', padding: 4, margin: 4 }}>
            #functional-programming
          </mark>
        </Quote>
        <FlexBox flexDirection="column" alignItems="start">
          <Box style={{ width: '100%' }}>
            <Heading margin="0px" color="tertiary" fontSize="text">
              反轉元素的排列
            </Heading>
            <CodePane language="javascript" highlightRanges={[3]}>
              {`
            const array = [1, 2, 3, 4, 5]; // expected result: [5, 4, 3, 2, 1]
            array.reverse(); // mutable      
            const reversedArray = array.toReversed(); // immutable
          `}
            </CodePane>
          </Box>
          <Box>
            <Heading margin="0px" color="tertiary" fontSize="text">
              按排序條件重新排列元素
            </Heading>
            <CodePane language="javascript" highlightRanges={[7]}>
              {`
            function compareNumbers(a, b) {
              return a - b;
            }

            const array = [4, 2, 5, 1, 3]; // expected result: [1, 2, 3, 4, 5]
            array.sort(compareNumbers); // mutable  
            const sortedArray = array.toSorted(compareNumbers); // immutable
          `}
            </CodePane>
          </Box>
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}
