import { CodePane, FlexBox, Heading, Quote, Slide } from 'spectacle';

export default function ObjectGroupBy() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="tertiary" fontSize="h2" margin="0px" padding="0px">
          <pre style={{ padding: 0, margin: 0 }}>
            {`<Object|Map>`}.groupBy<br></br>(iterables, function)
          </pre>
        </Heading>
        <Quote color="tertiary" fontSize="monospace" lineHeight="1.5">
          <p>
            <strong>Spec: ES2024</strong>
          </p>
          Object 跟 Map 物件都具有的靜態方法。將陣列中的元素按照 function
          執行時回傳的鍵名進行分組
          <br></br>
          最後會以鍵值對的結構，回傳分組後的物件
        </Quote>
        <Heading color="tertiary" fontSize="text" margin="0px">
          e.g. 按照性別來分類使用者資訊
        </Heading>
        <FlexBox style={{ gap: 16 }} alignItems="start">
          <CodePane language="javascript">
            {`
          // original data
          const users = [
              { name: 'Alice', gentle: 'female' },
              { name: 'Bob', gentle: 'male' },
              { name: 'Charlie', gentle: 'male' },
              { name: 'Eve', gentle: 'female' }
          ];
        `}
          </CodePane>
          <CodePane language="javascript">
            {`
        // expected result
        const groupedUsers = {
          female: [
            { name: 'Alice', gentle: 'female' },
            { name: 'Eve', gentle: 'female' }
          ],
          male: [
            { name: 'Bob', gentle: 'male' },
            { name: 'Charlie', gentle: 'male' },
          ]
        }
        `}
          </CodePane>
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}
