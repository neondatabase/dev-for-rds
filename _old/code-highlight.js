import PropTypes from 'prop-types';
import { CopyBlock } from 'react-code-blocks';
import customTheme from '../utils/code-block-theme';

const CodeHighlight = ({ text, language, highlight }) => {
  return (
    <figure className='overflow-auto overscroll-auto m-0'>
      <pre className='not-prose m-0 p-3 bg-brand-code text-sm'>
        <CopyBlock
          text={text}
          language={language}
          showLineNumbers={true}
          wrapLines={true}
          theme={customTheme}
          highlight={highlight}
          codeBlock
        />
      </pre>
    </figure>
  );
};

CodeHighlight.propTypes = {
  /** The code snippet to display */
  text: PropTypes.string.isRequired,
  /** The language of the code  */
  language: PropTypes.string.isRequired,
};

export default CodeHighlight;
