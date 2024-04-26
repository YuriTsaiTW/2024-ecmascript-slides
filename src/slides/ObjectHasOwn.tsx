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
  UnorderedList,
} from 'spectacle';

export default function ObjectHasOwn() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="tertiary" fontSize="h2">
          <pre style={{ padding: 0, margin: 0 }}>
            Object.hasOwn(object, key)
          </pre>
        </Heading>
        <Quote color="tertiary" fontSize="monospace" lineHeight="1.5">
          <p>
            <strong>Spec: ES2022</strong>
          </p>
          透過鍵名，檢查目標物件是否含有特定的成員
        </Quote>
        <Table marginBottom="24px" width="90%">
          <TableHeader backgroundColor="quinary">
            <TableRow>
              <TableCell color="tertiary" padding="4px">
                語法
              </TableCell>
              <TableCell color="tertiary" padding="4px">
                方法類型
              </TableCell>

              <TableCell color="tertiary" padding="4px">
                適用對象
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody backgroundColor="primary">
            <TableRow>
              <TableCell color="tertiary" padding="4px">
                <pre>Object.prototype.hasOwnProperty</pre>
              </TableCell>
              <TableCell color="tertiary" padding="4px">
                實體
              </TableCell>
              <TableCell color="tertiary" padding="4px">
                一般物件都會繼承 Object 的
                prototype，可以直接呼叫 hasOwnProperty(key)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell color="tertiary" padding="4px">
                <pre>Object.hasOwn</pre>
              </TableCell>
              <TableCell color="tertiary" padding="4px">
                靜態
              </TableCell>
              <TableCell color="tertiary" padding="4px">
                對象物件的 prototype 有異動，導致該物件的 prototype 沒有
                hasOwnProperty 方法可以呼叫
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <FlexBox justifyContent="spaceBetween">
          <CodePane language="javascript">
            {`
            const book = Object.create(null); // 不會繼承到 Object 的 prototype
            book.name= "ECMAScript 關鍵 30 天";

            const hasNameProp = Object.prototype.hasOwnProperty.call(book, name);
            // or
            const hasNameProp = Object.hasOwn(book, name);
          `}
          </CodePane>
          <UnorderedList fontSize="monospace">
            <ListItem>
              <Link
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn"
                fontSize="monospace"
                color="secondary"
              >
                Check Documentation
              </Link>
            </ListItem>
            <ListItem>
              <Link
                target="_blank"
                href="https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.object.has-own.js"
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
