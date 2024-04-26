import { FlexBox, Heading, Image, Slide } from 'spectacle';

import QRCode from '../images/linkedin.jpeg';

export default function End() {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection={'column'}>
        <Heading fontSize="h2" color="quaternary">
          Thank you for being here ✨
        </Heading>
        <Image src={QRCode} width="25%" />
      </FlexBox>
    </Slide>
  );
}
