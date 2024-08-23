import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import parse from 'html-react-parser';
import { createHighlighter, codeToHtml } from 'shiki';

import CopyIcon from './copy-icon';
import CheckIcon from './check-icon';
import LinkIcon from './link-icon';

import { useCopyToClipboard } from '../utils/use-copy-to-clipboard';
import neon from '../styles/code-theme';

const ShikiHighlight = ({ text, language, file, link, className = '', isHero }) => {
  const [code, setCode] = useState('');
  const { isCopied, handleCopy } = useCopyToClipboard(3000);

  useEffect(() => {
    const convertCodeToHtml = async () => {
      const highlighter = await createHighlighter({
        themes: [neon],
        langs: ['shell', 'yml', 'javascript', 'sql', 'diff'],
      });

      const html = await highlighter.codeToHtml(text, {
        lang: language,
        theme: 'neon',
      });

      setCode(html);
      highlighter.dispose();
    };

    convertCodeToHtml();
  }, [text, language]);

  useEffect(() => {
    if (isHero) {
      document.querySelectorAll('.shiki').forEach((pre) => {
        pre.setAttribute('tabindex', '-1');
      });
    }
  }, [code]);

  return (
    <figure className={`m-0 bg-brand-surface overflow-hidden w-full ${className}`}>
      {file ? (
        <div className='relative p-4 font-inherit text-brand-text text-sm font-semibold bg-brand-surface border-b border-b-brand-border'>
          {link ? (
            <a
              href={link}
              target='_blank'
              rel='noopener'
              className='flex items-center gap-2 font-inherit text-white no-underline hover:text-brand-primary transition-colors duration-300'
            >
              <LinkIcon />
              {file}
            </a>
          ) : (
            <>{file}</>
          )}
        </div>
      ) : null}
      <div className='relative group cursor-text'>
        {isHero ? null : (
          <button
            className='absolute top-2 right-2 flex items-center justify-center border border-brand-gray-500 text-white rounded p-2 transition-[opacity] duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100'
            onClick={() => handleCopy(text.replace(/^[+-]/gm, ''))}
          >
            {isCopied ? <CheckIcon className='w-4 h-4 p-[1px]' /> : <CopyIcon />}
          </button>
        )}
        {parse(code) || ''}
      </div>
    </figure>
  );
};

ShikiHighlight.propTypes = {
  /** CSS classes  */
  className: PropTypes.string,
  /** The link to the fill */
  link: PropTypes.string,
  /** The code snippet to display */
  text: PropTypes.string.isRequired,
  /** The language of the code  */
  language: PropTypes.string.isRequired,
  /** The name of the file */
  file: PropTypes.string.isRequired,
  /** Does't render the button if its the hero section */
  isHero: PropTypes.bool,
};

export default ShikiHighlight;
