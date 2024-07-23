import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import parse from 'html-react-parser';
import { codeToHtml } from 'shiki';

const ShikiHighlight = ({ text, language, file }) => {
  const [code, setCode] = useState('');

  useEffect(() => {
    const fetchHighlight = async () => {
      const html = await codeToHtml(text, {
        lang: language,
        theme: 'aurora-x',
      });

      setCode(html);
    };

    fetchHighlight();
  }, [text, language]);

  return (
    <figure className='m-0 bg-brand-code rounded overflow-hidden'>
      <div className='p-4 text-sm text-brand-gray-400 bg-brand-gray-600 border-b border-b-brand-gray-500'>{`// ${file}`}</div>
      {parse(code) || ''}
    </figure>
  );
};

ShikiHighlight.propTypes = {
  /** The code snippet to display */
  text: PropTypes.string.isRequired,
  /** The language of the code  */
  language: PropTypes.string.isRequired,
  /** The name of the file */
  file: PropTypes.string.isRequired,
};

export default ShikiHighlight;
