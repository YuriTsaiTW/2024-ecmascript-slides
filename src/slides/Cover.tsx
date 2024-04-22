import { FlexBox, Heading, Notes, Slide } from 'spectacle';

export default function Cover() {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          ✨2022 到 2024，解析值得關注的 JavaScript 新語法✨
        </Heading>
        <Heading margin="0px" color="primary" fontSize="h3">
          iThome鐵人講堂 | 直播研討會
        </Heading>
        <Heading margin="16px 32px" color="primary" fontSize="text">
          July.3, 2024 &nbsp;&nbsp;&nbsp;&nbsp; 🙋‍♀️&nbsp;Present by: Yuri Tsai
        </Heading>
      </FlexBox>
      <Notes>
        暖場打招呼，簡單帶過兩大主題
        <ol>
          <li>Headless UI</li>
          <li>react-table</li>
        </ol>
      </Notes>
    </Slide>
  );
}
