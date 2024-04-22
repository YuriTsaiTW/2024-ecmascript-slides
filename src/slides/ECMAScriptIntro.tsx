import { Box, FlexBox, Heading, Quote, Slide } from 'spectacle';

export default function ECMAScriptIntro() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" color="tertiary" fontSize="h2">
          ECMAScript 提案五階段
        </Heading>
        <Quote>什麼是 ECMAScript?</Quote>
        <FlexBox>
          <Box>Stage 0</Box>
          <Box>由 TC－39 的成員或其他人提出後，委員會沒有否決的討論或想法</Box>
        </FlexBox>
        <FlexBox>
          <Box>Stage 1</Box>
          <Box>
            正式成為提案，需有具體語法和描述，可能已經有 Polyfill 的實現
          </Box>
        </FlexBox>
        <FlexBox>
          <Box>Stage 2</Box>
          <Box>可能有相關的運作環境或編譯器提供實驗性的功能實現</Box>
        </FlexBox>
        <FlexBox>
          <Box>Stage 3</Box>
          <Box>成為候選提案，部分運作環境或編譯器提供原生支援</Box>
        </FlexBox>
        <FlexBox>
          <Box>Stage 4</Box>
          <Box>通過至少兩個驗收測試，等待下版釋出時成為修訂內容</Box>
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}
