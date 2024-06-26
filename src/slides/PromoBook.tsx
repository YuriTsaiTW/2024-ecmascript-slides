import {
  FlexBox,
  Heading,
  Image,
  Link,
  ListItem,
  Slide,
  Text,
  UnorderedList,
} from 'spectacle';

import BookCover from '../images/book.png';

export default function PromoBook() {
  return (
    <Slide>
      <FlexBox
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize="h2">ECMAScript 關鍵 30 天</Heading>
        <FlexBox>
          <Image width={240} src={BookCover} />
          <div>
            <Text fontSize="h3">
              為即將踏入或已經在 ModernWeb 打滾的你，
              <br />
              呈上滿滿的語法和核心 💪
            </Text>
            <UnorderedList>
              <ListItem fontSize="text">
                深入淺出函式、物件、原型、執行環境、this
                等等讓初學者頭痛的重要機制
              </ListItem>
              <ListItem fontSize="text">
                根據標準內建物件的種類和常用性規劃章節，並且依情境分類重要語法
              </ListItem>
              <ListItem fontSize="text">
                透過清楚的中文敘述，搭配簡單的程式範例一探 ES2022!
              </ListItem>
            </UnorderedList>
          </div>
        </FlexBox>
        <FlexBox>
          <Link
            target="_blank"
            href="https://www.tenlong.com.tw/products/9789864349197"
          >
            <Text fontSize="text">📚 天瓏 (Tenlog)</Text>
          </Link>
          <Link
            target="_blank"
            href="https://www.books.com.tw/products/0010907980"
          >
            <Text fontSize="text">📚 博客來 (Books)</Text>
          </Link>
          <Link target="_blank" href="https://readmoo.com/book/210214657000101">
            <Text fontSize="text">📚 讀墨 (Readmoo)</Text>
          </Link>
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}
