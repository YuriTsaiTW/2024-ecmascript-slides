import {
  CodePane,
  FlexBox,
  Heading,
  Link,
  ListItem,
  Quote,
  Slide,
  UnorderedList,
} from 'spectacle';

export default function TopLevelAwait() {
  return (
    <Slide backgroundColor="quaternary">
      <FlexBox height="100%" flexDirection="column">
        <Heading color="tertiary" fontSize="h2">
          <pre style={{ padding: 0, margin: 0 }}>Top-level await</pre>
        </Heading>
        <Quote color="tertiary" fontSize="monospace" lineHeight="1.5">
          <p>
            <strong>Spec: ES2022</strong>
          </p>
          允許在模組的最外層單獨使用
          await，在載入模組時，可以立即執行非同步的函式
          <br />
        </Quote>
        <CodePane language="javascript">{`
          // case 1: 使用 fetch 發出請求
          const appSettings = await fetch('/api/settings').then(res => res.json());
          const api = new API(appSettings);
          await api.authenticate();

          // case 2: 使用 import 匯入依賴
          const library = await import('some-important-library');
          library.initialize();
        `}</CodePane>
        <UnorderedList fontSize="monospace">
          <ListItem color="tertiary">
            ✅ 簡化配置模組在初始化時需要的資源
          </ListItem>
          <ListItem color="tertiary">🔺 可能導致載入模組的延遲</ListItem>
          <ListItem>
            <Link
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await"
              fontSize="monospace"
              color="secondary"
            >
              Check Documentation
            </Link>
          </ListItem>
          <ListItem>
            <Link
              target="_blank"
              href="https://babeljs.io/docs/babel-plugin-syntax-top-level-await"
              fontSize="monospace"
              color="secondary"
            >
              ❗Check Polyfill/Transformer
            </Link>
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
  );
}
