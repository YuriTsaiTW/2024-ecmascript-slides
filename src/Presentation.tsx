import { Deck, DefaultTemplate } from 'spectacle';

import AboutMe from './slides/AboutMe';
import Cover from './slides/Cover';
import ECMAScriptIntro from './slides/ECMAScriptIntro';
import End from './slides/End';
import PromoBook from './slides/PromoBook';
import theme from './theme';

export default function Presentation() {
  return (
    <Deck template={() => <DefaultTemplate />} theme={theme}>
      <Cover />
      <ECMAScriptIntro />
      <AboutMe />
      <PromoBook />
      <End />
    </Deck>
  );
}
