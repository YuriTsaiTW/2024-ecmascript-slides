import { Deck, DefaultTemplate } from 'spectacle';

import ArrayAt from './slides/ArrayAt';
import ArrayAt1 from './slides/ArrayAt1';
import ChangeArrayByCopy from './slides/ChangeArrayByCopy';
import ChangeArrayByCopy1 from './slides/ChangeArrayByCopy1';
import Conclusion from './slides/Conclution';
import Cover from './slides/Cover';
import ECMAScriptIntro from './slides/ECMAScriptIntro';
import End from './slides/End';
import ErrorCause from './slides/ErrorCaue';
import FindLast from './slides/FindLast';
import FindLastIndex from './slides/FindLastIndex';
import LearnMindset from './slides/LearnMindset';
import MapGroupBy from './slides/MapGroupBy';
import ObjectGroupBy from './slides/ObjectGroupBy';
import ObjectHasOwn from './slides/ObjectHasOwn';
import PromiseAllResolvers from './slides/PromiseAllResolvers';
import PromoBook from './slides/PromoBook';
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
      <ObjectGroupBy />
      <MapGroupBy />
      {/* object */}
      <ObjectHasOwn />
      {/* async */}
      <PromiseAllResolvers />
      <TopLevelAwait />
      <ErrorCause />
      <Conclusion />
      <PromoBook />
      <End />
    </Deck>
  );
}
