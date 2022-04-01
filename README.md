
 <p align="center"><img width="250" src="https://usejs.github.io/.github/public/Use.transparent.png"/></p>


# <p align="center">useResizeObserver</p>
<p align="center">
<a href="#details">
<img src="https://img.shields.io/badge/License-MIT-319046?" alt="License-MIT"/>&nbsp;&nbsp;
<img src="https://img.shields.io/badge/npm-0.1.0-319046?" alt="License-MIT"/></a>


</p>

<br/>

A Custom Hook to observer the component resize.

- Returns:<br/>
  [ref](#ref) : `RefObject<HTMLDivElement>`<br/>
  [width](#ref)? : `RefWidth`<br/>
  [height](#ref)? : `RefHeight`<br/>

- Argument<br/>
  [callback](#callback)? : `callback: (entry: DOMRectReadOnly) => void`<br/>

### Install
```bash 
npm i @_use/resizeobserver
```

### Usage

```tsx 
import useResizeObserver from '@_use/resizeobserver'

const DivResizeObserver = () => {

  const [ ref, width, height ] = useResizeObserver(e => {
    console.log(e)
  })
    console.log(width)

  return (<>
    <div ref={ref}>

    <div/>
  </>)
}

export default DivResizeObserver
```

### Type
> if you need `useResizeObserver` type, import inside `UseResizeObserver` braces with first letter capitalized.
```ts
import useResizeObserver, { UseResizeObserver } from '@_use/resizeobserver'
```

```ts
type RefWidth = number | undefined
type RefHeight = number | undefined

type UseResizeObserver = (  callback?: (entry: DOMRectReadOnly) => void) => [
  RefObject<HTMLDivElement>,
  RefWidth?, 
  RefHeight?
]
```

<br/>
<br/>
<br/>

<p align="center">Use.js &copy; 2022 | License MIT</p>