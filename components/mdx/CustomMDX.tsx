// components/mdx-remote.js
import { MDXRemote } from 'next-mdx-remote/rsc';
import H1 from './H1';
import H2 from './H2';
import P from './P';

const components = {
  h1: H1,
  h2: H2,
  p: P,
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
