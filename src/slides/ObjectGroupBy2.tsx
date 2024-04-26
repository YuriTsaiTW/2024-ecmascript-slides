import {
  FlexBox,
  Heading,
  Image,
  Link,
  ListItem,
  Slide,
  UnorderedList,
} from 'spectacle';

import GroupBy from '../images/groupBy.png';

export default function ObjectGroupBy2() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column" justifyContent="start">
        <Heading color="tertiary" fontSize="h2">
          <pre style={{ padding: 0, margin: 0 }}>
            {`<Object|Map>`}.groupBy<br></br>(iterables, function)
          </pre>
        </Heading>
        <Image src={GroupBy} width="65%" />
        <UnorderedList fontSize="monospace">
          <ListItem>
            <Link
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy"
              fontSize="monospace"
              color="secondary"
            >
              Check Documentation
            </Link>
          </ListItem>
          <ListItem>
            <Link
              target="_blank"
              href="https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.object.group-by.js"
              fontSize="monospace"
              color="secondary"
            >
              Check Polyfill/Transformer
            </Link>
          </ListItem>
          <ListItem>
            <Link
              target="_blank"
              href="https://jsperf.app/zukaqa"
              fontSize="monospace"
              color="secondary"
            >
              Check Performance
            </Link>
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
  );
}
