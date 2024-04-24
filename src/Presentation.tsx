import { Deck, DefaultTemplate } from 'spectacle';

import AboutMe from './slides/AboutMe';
import ArrayAt from './slides/ArrayAt';
import ArrayAt1 from './slides/ArrayAt1';
import Cover from './slides/Cover';
import ECMAScriptIntro from './slides/ECMAScriptIntro';
import End from './slides/End';
import FindLast from './slides/FindLast';
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
      <ArrayAt1 />
      {/* TODO */}
      <FindLast />
      <AboutMe />
      <PromoBook />
      <End />
    </Deck>
  );
}
