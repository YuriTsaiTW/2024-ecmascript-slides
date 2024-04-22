import { FlexBox, Heading, Image, Slide } from 'spectacle';

export default function End() {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection={'column'}>
        <Heading margin="0px" fontSize="64px" color="primary">
          Thanks for your attention 👋
        </Heading>
        {/* <Image src={QRCode} width="40%" /> */}
      </FlexBox>
    </Slide>
  );
}
