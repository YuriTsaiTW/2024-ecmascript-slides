import { PropsWithChildren } from 'react';
import { FlexBox, Grid, Heading, Quote, Slide, Text } from 'spectacle';

function PointBox({ children }: PropsWithChildren) {
  return (
    <FlexBox backgroundColor="secondary" marginBottom="24px">
      <Heading fontSize="24px" color="primary" padding="6px" margin="12px">
        {children}
      </Heading>
    </FlexBox>
  );
}

function DescBox({ children }: PropsWithChildren) {
  return (
    <FlexBox
      borderBottomColor="secondary"
      borderBottomStyle="solid"
      bottomBottomWidth="1px"
      marginBottom="24px"
    >
      <Text color="tertiary">{children}</Text>
    </FlexBox>
  );
}

export default function LearnMindset() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" color="tertiary" fontSize="h2">
          新語法，該學嗎？
        </Heading>
        <Quote color="tertiary" fontSize="monospace" lineHeight="1.5">
          從 ES2015(ES6)
          開始，每年都會釋出新的語法標準。與其埋頭苦追所有的新語法，
          <br />
          不如先評估學習效益，以及思考自己適合發展什麼樣的技能棧
        </Quote>
        <Grid gridTemplateColumns="40% 60%" gridGap={'0px'} width="60%">
          <PointBox>Required Functionality?</PointBox>
          <DescBox>是否可以滿足業務需求的開發</DescBox>
          <PointBox>Better Code Quality?</PointBox>
          <DescBox>是否可以帶來更好的程式品質</DescBox>
          <PointBox>Better Performance?</PointBox>
          <DescBox>是否可以優化執行階段的效能</DescBox>
          <PointBox>Well Compatibility?</PointBox>
          <DescBox>是否可以相容目標的執行環境</DescBox>
        </Grid>
      </FlexBox>
    </Slide>
  );
}
