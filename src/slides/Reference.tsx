import {
  FlexBox,
  Heading,
  Link,
  ListItem,
  Slide,
  UnorderedList,
} from 'spectacle';

export default function Reference() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="tertiary" fontSize="h2">
          <pre style={{ padding: 0, margin: 0 }}>參考資源</pre>
        </Heading>
        <UnorderedList color="tertiary">
          <ListItem>
            <Link
              color="tertiary"
              src="https://juejin.cn/post/7340156587722358836"
            >
              ECMAScript 2024 (ES15) 新特性更新
            </Link>
          </ListItem>
          <ListItem>
            <Link
              color="tertiary"
              src="https://www.explainthis.io/zh-hant/swe/es2023"
            >
              ES2023（ES14）有什麼新特性？
            </Link>
          </ListItem>
          <ListItem>ChatGPT v4</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
  );
}
