import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import parse from 'html-react-parser';
import { codeToHtml } from 'shiki';

import CopyIcon from './copy-icon';
import CheckIcon from './check-icon';

import { useCopyToClipboard } from '../utils/use-copy-to-clipboard';

const ShikiHighlight = ({ text, language, file, className = '' }) => {
  const [code, setCode] = useState('');
  const { isCopied, handleCopy } = useCopyToClipboard(3000);

  useEffect(() => {
    const convertCodeToHtml = async () => {
      const html = await codeToHtml(text, {
        lang: language,
        theme: 'aurora-x',
      });

      setCode(html);
    };

    convertCodeToHtml();
  }, [text, language]);

  return (
    <figure className={`relative m-0 bg-brand-surface rounded overflow-hidden ${className}`}>
      {file ? <div className='p-4 font-inherit text-white border-b border-b-brand-border'>{file}</div> : null}
      <div className='relative group cursor-text'>
        <button
          className='absolute top-2 right-2 flex items-center justify-center border border-brand-gray-500 text-white rounded p-2 transition-[opacity] duration-300 opacity-0 group-hover:opacity-100'
          onClick={() => handleCopy(text.replace(/^[+-]/gm, ''))}
        >
          {isCopied ? <CheckIcon className='w-4 h-4 p-[1px]' /> : <CopyIcon />}
        </button>
        {parse(code) || ''}
      </div>
    </figure>
  );
};

ShikiHighlight.propTypes = {
  /** CSS classes  */
  className: PropTypes.string,
  /** The code snippet to display */
  text: PropTypes.string.isRequired,
  /** The language of the code  */
  language: PropTypes.string.isRequired,
  /** The name of the file */
  file: PropTypes.string.isRequired,
};

export default ShikiHighlight;
