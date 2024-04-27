import { Deck, DefaultTemplate } from 'spectacle';

import ArrayAt from './slides/ArrayAt';
import ArrayAt1 from './slides/ArrayAt1';
import ChangeArrayByCopy from './slides/ChangeArrayByCopy';
import ChangeArrayByCopy1 from './slides/ChangeArrayByCopy1';
import Cover from './slides/Cover';
import ECMAScriptIntro from './slides/ECMAScriptIntro';
import End from './slides/End';
import ErrorCause from './slides/ErrorCaue';
import FindLast from './slides/FindLast';
import FindLastIndex from './slides/FindLastIndex';
import LearnMindset from './slides/LearnMindset';
import ObjectGroupBy from './slides/ObjectGroupBy';
import ObjectGroupBy1 from './slides/ObjectGroupBy1';
import ObjectGroupBy2 from './slides/ObjectGroupBy2';
import ObjectHasOwn from './slides/ObjectHasOwn';
import OtherSyntax from './slides/OtherSyntax';
import PromiseWithResolvers from './slides/PromiseWithResolvers';
import PromiseWithResolvers1 from './slides/PromiseWithResolvers1';
import PromoBook from './slides/PromoBook';
import Reference from './slides/Reference';
import TopLevelAwait from './slides/TopLevelAwait';
import theme from './theme';

export default function Presentation() {
  return (
    <Deck template={() => <DefaultTemplate />} theme={theme}>
      <Cover />
      <ECMAScriptIntro />
      <LearnMindset />
      {/* array */}
      <ArrayAt />
      <ArrayAt1 />
      <FindLast />
      <FindLastIndex />
      <ChangeArrayByCopy />
      <ChangeArrayByCopy1 />
      {/* object */}
      <ObjectGroupBy />
      <ObjectGroupBy1 />
      <ObjectGroupBy2 />
      <ObjectHasOwn />
      {/* async */}
      <PromiseWithResolvers />
      <PromiseWithResolvers1 />
      <TopLevelAwait />
      <ErrorCause />
      <OtherSyntax />
      <Reference />
      <PromoBook />
      <End />
    </Deck>
  );
}
