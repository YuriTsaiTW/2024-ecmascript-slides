import { PropsWithChildren } from 'react';
import {
  Box,
  FlexBox,
  Grid,
  Heading,
  Link,
  Notes,
  Quote,
  Slide,
  Text,
} from 'spectacle';

function StageBox({ children }: PropsWithChildren) {
  return (
    <FlexBox
      backgroundColor="quinary"
      color="primary"
      borderColor="quinary"
      borderWidth="1px"
      borderStyle="solid"
      padding="12px"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </FlexBox>
  );
}

function DescBox({ children }: PropsWithChildren) {
  return (
    <FlexBox
      color="tertiary"
      borderColor="quinary"
      borderWidth="1px"
      borderStyle="solid"
      padding="12px"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </FlexBox>
  );
}

export default function ECMAScriptIntro() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" color="tertiary" fontSize="h2">
          ECMAScript 提案五階段
        </Heading>
        <Quote color="tertiary" fontSize="monospace">
          ECMA International 是制定程式語言標準的非營利組織。
          <br />
          為了替當時各種瀏覽器中的腳本語言如 JavaScript、VBScript
          等制定統一標準，並且保持立場中立，
          <br />
          這項標準的名稱便以組織本身的縮寫命名，取為 ECMAScript
        </Quote>
        <Grid gridTemplateColumns="15% 85%" gridGap={12} height="100%">
          <StageBox>Stage 0</StageBox>
          <DescBox>
            由 TC－39 的成員或其他人提出後，委員會沒有否決的討論或想法
          </DescBox>
          <StageBox>Stage 1</StageBox>
          <DescBox>
            正式成為提案，需有具體語法和描述，可能已經有 Polyfill 的實現
          </DescBox>
          <StageBox>Stage 2</StageBox>
          <DescBox>可能有相關的運作環境或編譯器提供實驗性的功能實現</DescBox>
          <StageBox>Stage 3</StageBox>
          <DescBox>成為候選提案，部分運作環境或編譯器提供原生支援</DescBox>
          <StageBox>Stage 4</StageBox>
          <DescBox>通過至少兩個驗收測試，等待下版釋出時成為修訂內容</DescBox>
        </Grid>
        <Link
          target="_blank"
          href="https://github.com/tc39/proposals/blob/main/finished-proposals.md"
        >
          <Text fontSize="18px" color="quinary">
            Finished proposals on Github
          </Text>
        </Link>
      </FlexBox>
      <Notes>{/* TODO */}</Notes>
    </Slide>
  );
}
