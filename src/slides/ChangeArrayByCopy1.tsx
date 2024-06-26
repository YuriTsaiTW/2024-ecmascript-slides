import {
  Box,
  CodePane,
  FlexBox,
  Heading,
  Slide,
} from 'spectacle';

export default function ChangeArrayByCopy1() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="tertiary" fontSize="h2">
          Change Array by COPY
        </Heading>
        <FlexBox flexDirection="column" alignItems="start">
          <Box>
            <Heading margin="0px" color="tertiary" fontSize="text">
              對陣列刪除和新增元素
            </Heading>
            <CodePane language="javascript">
              {`
            const names = ['Yuri', 'Zoe', 'Bob'];
            
            // mutable
            const deletedName = names.splice(1, 1, 'Ann', 'May'); // ['Zoe']
            console.log(names); // ['Yuri', 'Ann', 'May', 'Bob']   
            
            // immutable
            const splicedNames = names.toSpliced(1, 1, 'Ann', 'May'); // ['Yuri', 'Ann', 'May', 'Bob']
          `}
            </CodePane>
          </Box>
          <Box style={{ width: '100%' }}>
            <Heading margin="0px" color="tertiary" fontSize="text">
              對指定索引的元素重新賦值
            </Heading>
            <CodePane language="javascript">
              {`
            const names = ['Yuri', 'Zoe', 'Bob']; // expected result: ['Yuri', 'May', 'Bob']

            names[1] = 'May'; // mutable  
            const newNames = names.with(1, 'May'); // immutable
          `}
            </CodePane>
          </Box>
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}
