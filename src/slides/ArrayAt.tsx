import {
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

export default function ArrayAt() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column">
        <Heading color="tertiary" fontSize="h2" padding="0px" margin="0px">
          <pre style={{ padding: 0, margin: 0 }}>indexable.at(index)</pre>
        </Heading>
        <Quote color="tertiary" fontSize="monospace" lineHeight="1.5">
          <p>
            <strong>Spec: ES2022</strong>
          </p>
          以索引取得陣列中的元素/字串中的字元
        </Quote>
        <Table marginBottom="24px" width="75%">
          <TableHeader backgroundColor="quinary">
            <TableRow>
              <TableCell color="tertiary" padding="4px">
                取得元素的方式
              </TableCell>
              <TableCell color="tertiary" padding="4px">
                正整數
              </TableCell>
              <TableCell color="tertiary" padding="4px">
                負整數
              </TableCell>
              <TableCell color="tertiary" padding="4px">
                浮點數
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody backgroundColor="primary">
            <TableRow>
              <TableCell color="tertiary" padding="4px">
                <pre>indexable[index]</pre>
              </TableCell>
              <TableCell color="tertiary" padding="4px" rowSpan="2">
                從開頭位置 0 開始計算
              </TableCell>
              <TableCell color="tertiary" padding="4px" colSpan="2">
                undefined
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell color="tertiary" padding="4px">
                <pre>indexable.at(index)</pre>
              </TableCell>
              <TableCell color="tertiary" padding="4px">
                從結尾位置 -1 開始計算
              </TableCell>
              <TableCell color="tertiary" padding="4px">
                無條件捨去，再由正負數決定
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <FlexBox justifyContent="spaceBetween">
          <CodePane language="javascript" highlightRanges={[8]}>
            {`
            // Usual practice
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            
            // before
            const lastElement = array[array.length - 1];

            // after
            const lastElement = array.at(-1);
          `}
          </CodePane>
          <UnorderedList fontSize="monospace">
            <ListItem>
              <Link
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at"
                fontSize="monospace"
                color="secondary"
              >
                Check Documentation
              </Link>
            </ListItem>
            <ListItem>
              <Link
                target="_blank"
                href="https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.array.at.js"
                fontSize="monospace"
                color="secondary"
              >
                Check Polyfill/Transformer
              </Link>
            </ListItem>
            <ListItem>
              <Link
                target="_blank"
                href="https://jsperf.app/qutihi/3"
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
