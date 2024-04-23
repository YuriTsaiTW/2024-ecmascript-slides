import { Deck, DefaultTemplate } from 'spectacle';

import AboutMe from './slides/AboutMe';
import ArrayAt from './slides/ArrayAt';
import Cover from './slides/Cover';
import ECMAScriptIntro from './slides/ECMAScriptIntro';
import End from './slides/End';
import LearnMindset from './slides/LearnMindset';
import PromoBook from './slides/PromoBook';
import theme from './theme';

export default function Presentation() {
  return (
    <Deck template={() => <DefaultTemplate />} theme={theme}>
      <Cover />
      <ECMAScriptIntro />
      <LearnMindset />
      <ArrayAt />
      {/* TODO */}
      <AboutMe />
      <PromoBook />
      <End />
    </Deck>
  );
}
