import {
  FlexBox,
  Heading,
  ListItem,
  OrderedList,
  Slide,
  UnorderedList,
} from 'spectacle';

export default function OtherSyntax() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="tertiary" fontSize="h2" padding="0px" margin="0px">
          <pre style={{ padding: 0, margin: 0 }}>或許你有興趣的語法</pre>
        </Heading>
        <UnorderedList color="tertiary">
          <ListItem>
            <OrderedList color="tertiary">
              <Heading
                fontSize="text"
                textAlign="left"
                style={{
                  paddingLeft: 0,
                  marginLeft: 0,
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
              >
                正規表達式 RegExp
              </Heading>

              <ListItem>
                [ES2022] d 旗標：回傳每個匹配內容的起始 &
                下次要開始檢索的索引陣列
              </ListItem>
              <ListItem>
                [ES2024] v 旗標：擴充對於字串中 unicode
                字元、不區分大小寫等的匹配
              </ListItem>
            </OrderedList>
          </ListItem>
          <ListItem>
            <OrderedList color="tertiary">
              <Heading
                fontSize="text"
                textAlign="left"
                style={{
                  paddingLeft: 0,
                  marginLeft: 0,
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
              >
                類別 Class
              </Heading>
              <ListItem>[ES2022] 擴充靜態關鍵字(static)的使用</ListItem>
              <ListItem>[ES2022] 正式支援私有 (private)的機制</ListItem>
            </OrderedList>
          </ListItem>
          <ListItem>
            <OrderedList color="tertiary">
              <Heading
                fontSize="text"
                textAlign="left"
                style={{
                  paddingLeft: 0,
                  marginLeft: 0,
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
              >
                WeakMap
              </Heading>
              <ListItem>[ES2024] 支援以 Symbol 型別作為鍵名</ListItem>
            </OrderedList>
          </ListItem>
          <ListItem>
            <OrderedList color="tertiary">
              <Heading
                fontSize="text"
                textAlign="left"
                style={{
                  paddingLeft: 0,
                  marginLeft: 0,
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
              >
                Set
              </Heading>
              <ListItem>[ES2025] 擴充更多 Set 物件的實體方法</ListItem>
            </OrderedList>
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
  );
}
