# mx-progressbar

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/mx-progressbar.svg)](https://www.npmjs.com/package/mx-progressbar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mx-progressbar
```

## Usage

```tsx
import * as React  from 'react'
import { ProgressBar } from '@maxicorrea/mx-progressbar'

const App = () => {
  const [progress, setProgress] = React.useState(0);
  const [time] = React.useState(1000);
  React.useEffect(() => {
     const timer = setInterval(() => {
        setProgress((prevProgress: number) => (prevProgress >= 100 ? 0 : prevProgress + 1));
     }, time);
     return () => {
        clearInterval(timer);
        setProgress(0);
     };
  }, [time]);
  return (
    <div style={{margin: "20px"}}>
      <ProgressBar progress={progress} width='500px'/>
    </div>
  )
}

export default App;

```

## License

MIT © [MaxiCorrea](https://github.com/MaxiCorrea)
