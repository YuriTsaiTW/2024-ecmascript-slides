import { FlexBox, Grid, Heading, Quote, Slide, Text } from 'spectacle';

export default function LearnMindset() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" color="tertiary" fontSize="h2">
          新語法，該學嗎？
        </Heading>
        <Quote color="tertiary" fontSize="18px">
          從 ES2015(ES6)
          開始，每年都會釋出新的語法標準。與其埋頭苦追所有的新語法，
          <br />
          不如先客觀評估學習效益，以及思考自己適合發展什麼樣的技能棧
        </Quote>
        <Grid gridTemplateColumns="40% 60%" gridGap={6} width="60%">
          <FlexBox backgroundColor="secondary">
            <Heading fontSize="text" color="primary" padding="12px" margin="0px">
              Required Functionality?
            </Heading>
          </FlexBox>
          <FlexBox
            borderBottomColor="secondary"
            borderBottomStyle="solid"
            bottomBottomWidth="0.5px"
            color="tertiary"
          >
            xxxxxxxxx
          </FlexBox>
          <Heading fontSize="text" padding="0px" margin="0px">
            Better Maintenance?
          </Heading>
          <Text>xxxxxxxxx</Text>
          <Heading fontSize="text" padding="0px" margin="0px">
            Better Performance?
          </Heading>
          <Text>xxxxxxxxx</Text>
          <Heading fontSize="text" padding="0px" margin="0px">
            Well Compatibility?
          </Heading>
          <Text>xxxxxxxxx</Text>
        </Grid>
      </FlexBox>
    </Slide>
  );
}
