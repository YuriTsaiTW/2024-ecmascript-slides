import {
  Deck,
  DefaultTemplate,
  FlexBox,
  Heading,
  Slide,
  SpectacleLogo,
} from 'spectacle';

import Cover from './slides/Cover';
import theme from './theme';

export default function Presentation() {
  return (
    <Deck template={() => <DefaultTemplate />} theme={theme}>
      <Cover />
      <Slide>
        <FlexBox height="100%">
          <Heading fontSize="h2">Made with</Heading>
          <SpectacleLogo size={300} />
        </FlexBox>
      </Slide>
    </Deck>
  );
}
